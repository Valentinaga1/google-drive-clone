//@ Packages
import { useRouter } from "next/router";
import { AiFillFileText, AiFillFolder } from "react-icons/ai";
//@ Scripts
import fetchFiles from "../hooks/fetchFiles";
import useSessionHook from "../hooks/useSession";
//@ Styles
import styles from "./ShowFiles.module.scss";

// Function to show folders and files
const ShowFilesComponent = ( {parentId} : FolderStructure ) => {
  console.log("parentId", parentId);
  const { session } = useSessionHook();
  const files = fetchFiles(parentId, session?.user?.email ?? "");
  const router = useRouter();
  const openFile = (fileLink: string) => {
    window.open(fileLink);
  }
  console.log("files", files);

  function isImageFilename(filename: string) {
    console.log("filename", filename);
    const extension = getFileExtension(filename);
    
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff", ".webp", ".svg", ".jfif"];
    
    return imageExtensions.includes(extension.toLowerCase());
}

  function getFileExtension(filename: string) {
    const parts = filename?.split('.');
    if (parts?.length > 1) {
        return "." + parts[parts?.length - 1]?.toLowerCase();
    } else {
        return "";
    }
}

  return (
    <div className={styles["files-grid"]}>
      {files.fileList.map((item: { imageLink:  string, imageName: string, isFolder: boolean, folderName: string, id:string }) => (
        <div key={item.imageLink} className={`${styles["all-files"]} bg-accent`} onClick={() => {void (item.isFolder ? router.push(`/folder?id=${item.id}`) : openFile(item.imageLink))}}>
          {item.isFolder ? (
            <>
              <AiFillFolder size={70}/>
              <p>{item.folderName}</p>
            </>
          ) : (
            <>
              {isImageFilename(item.imageName) ? <img className={styles["image-link"]} src={item.imageLink} /> : <AiFillFileText size={70}/>}
              <p>{item.imageName}</p>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default ShowFilesComponent