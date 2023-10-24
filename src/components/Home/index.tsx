//@ Scripts
import ShowFilesComponent from "../ShowFiles";
import Topbar from "../Topbar";
import UploadFiles from "../UploadFiles";
import useSessionHook from '@/components/hooks/useSession';

// Home component
const HomeComponent = () => {
  const { session } = useSessionHook();
  return (
    <>
      <Topbar/>
      {session && (
        <>
          <UploadFiles parentId={""}/>
          <ShowFilesComponent parentId={""}/> 
        </>
      )}
    </>
  )
}

export default HomeComponent