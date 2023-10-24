//@ Packages
import {signIn, signOut } from "next-auth/react"
import { Router, useRouter } from "next/router";
//@ Scripts
import useSessionHook from "../hooks/useSession";
import Button from "../common/Button";
//@ Styles
import styles from "./Topbar.module.scss";

// Component with the btns and loggin user info
const Topbar = () => {
  const { session } = useSessionHook();
  const router = useRouter();
  
  return (
    <div>
      <div className={styles["top-bar-container"]}>
        {session ? (
        <div className={styles["top-bar-sign-in-container"]}>
          <div>
            {router.asPath !== "/" && (
              <Button 
                onClick={() => router.replace("/")} 
                btnClass="btn btn-outline btn-success" 
                title="<Back"/>
              )}
          </div>
          <div className={styles["top-bar-sign-in-right"]}>
            <p className="font-extrabold tracking-tight text-white m-4">
              {`${session?.user.name}`}
              </p>
              <img
                onClick={() => {
                  void router.replace("/");
                  void signOut();
                }} 
                className={styles["profile-img"]}
                src={session?.user?.image ?? ""} 
              />
            </div>
        </div>
        ) : (
         <div className={styles["top-bar-sign-in-container"]}>
            <div></div>
            <Button 
              onClick={() => signIn()} 
              btnClass="btn-primary" 
              title="Sign Up"/>
         </div>
        )}
      </div>
    </div>
  )
}

export default Topbar