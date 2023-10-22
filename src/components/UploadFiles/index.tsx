import styles from "./Upload.module.scss";
import Button from "../common/Button";
import { ChangeEvent, useState } from "react";
import { fileUpload } from "@/API/FileUpload";
import ProgressComponent from "../common/Progress";
import { addFolder } from "@/API/FireStore";
import useSessionHook from "../hooks/useSession";

const UploadFiles = ({ parentId }: FolderStructure) => {
  const { session } = useSessionHook();
  const [isFileVisible, setIsFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVissible, setIsFolderVissible] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [file, setFile] = useState({});

  const uploadFile = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log("file", e);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    // const file = ;
    fileUpload(e.target.files?.[0], setProgress, parentId, session?.user.email);
    console.log("files", e.target.files[0]);
  }

  const createFolder = () => {
    const payload = {
      folderName: folderName,
      isFolder: true,
      fileList: [],
      parentId: parentId || "",
      userEmail: session?.user.email
    };
    addFolder(payload);
    setFolderName("");
  }

  return (
    <div className={styles["upload-main"]}>
      <Button
        onClick={() => {
          setIsFolderVissible(false);
          setIsFileVisible(!isFileVisible);
        }} 
        title="Add a file" 
        btnClass="btn btn-outline btn-success m-2"
      />
      {isFileVisible &&
        <input
          onChange={(e) => uploadFile(e)} 
          type="file" 
          className="file-input max-w-xs" 
        />
      }
      <Button
        title="Add a folder" 
        btnClass="btn btn-outline btn-success m-2"
        onClick={e => {
          setIsFileVisible(false);
          setIsFolderVissible(!isFolderVissible);
        }}
      />
      {isFolderVissible &&
        <>
        <input 
          onChange={e => setFolderName(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered input-accent  max-w-xs"
          value={folderName}
        />
        <Button
          title="Create" 
          btnClass="btn btn-outline btn-success m-2"
          onClick={createFolder}
        />
        </>
      }
      {(progress > 0 && progress < 100) && <ProgressComponent progress={progress}/>}
    </div>
  );
}

export default UploadFiles;