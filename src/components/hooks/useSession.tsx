import { useSession, signIn, signOut } from "next-auth/react"

const useSessionHook = () => {
  
  const { data: session } = useSession();
  console.log("session", session);

  return { session };
}

export default useSessionHook;