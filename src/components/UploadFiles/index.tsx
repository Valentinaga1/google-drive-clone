//@ Packages
import { ChangeEvent, useState } from "react";
//@ Scripts
import { fileUpload } from "@/API/FileUpload";
import { addFolder } from "@/API/FireStore";
import ProgressComponent from "../common/Progress";
import useSessionHook from "../hooks/useSession";
import Button from "../common/Button";
//@ Styles
import styles from "./Upload.module.scss";

// Component to upload files and create folders
const UploadFiles = ({ parentId }: FolderStructure) => {
  const { session } = useSessionHook();
  const [isFileVisible, setIsFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVissible, setIsFolderVissible] = useState(false);
  const [folderName, setFolderName] = useState("");

  const userEmail = session?.user.email ?? "";

  const uploadFile =  (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      fileUpload(selectedFile, setProgress, parentId, userEmail);
    }
  }

  const createFolder = () => {
    const payload = {
      folderName: folderName,
      isFolder: true,
      fileList: [],
      parentId: parentId || "",
      userEmail: userEmail
    };
    void addFolder(payload);
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
        onClick={() => {
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