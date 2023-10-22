/* eslint-disable jsx-a11y/alt-text */
import styles from "./ShowFiles.module.scss";
import fetchFiles from "../hooks/fetchFiles";
import { AiFillFileText, AiFillFolder } from "react-icons/ai";
import { useRouter } from "next/router";
import useSessionHook from "../hooks/useSession";

const ShowFilesComponent = ( {parentId} : FolderStructure ) => {
  console.log("parentId", parentId);
  const { session } = useSessionHook();
  const files = fetchFiles(parentId, session?.user.email);
  const router = useRouter();
  const openFile = (fileLink: string) => {
    window.open(fileLink);
  }
  console.log("files", files);

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
              {/* <AiFillFileText size={70}/> */}
              <img className={styles["image-link"]} src={item.imageLink} />
              <p>{item.imageName}</p>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default ShowFilesComponent