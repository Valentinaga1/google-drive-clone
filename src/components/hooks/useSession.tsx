//@ Packages
import { useSession, signIn, signOut } from "next-auth/react"

// Function to return the actual session information
const useSessionHook = () => {
  const { data: session } = useSession();
  return { session };
}

export default useSessionHook;