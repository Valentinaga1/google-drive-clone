import styles from "./Topbar.module.scss";
import useSessionHook from "../hooks/useSession";
import Button from "../common/Button";
import {signIn, signOut } from "next-auth/react"
import { Router, useRouter } from "next/router";

const Topbar = () => {
  const { session } = useSessionHook();
  const router = useRouter();

  return (
    <div>
      <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
        {session && `Welcome ${session?.user.name}`}
      </h1>
      <div className={styles["auth-btn"]}>
        {session ? (
          <img
            onClick={() => {
              router.replace("/");
              signOut();
            }} 
            className={styles["profile-img"]}
            src={session?.user.image} 
          />
          // <Button 
          //   onClick={() => signOut()} 
          //   btnClass="btn-primary" 
          //   title="Sign Out"/>
        ) : (
          <Button 
            onClick={() => signIn()} 
            btnClass="btn-primary" 
            title="Sign Up"/>
        )}
      </div>
    </div>
  )
}

export default Topbar