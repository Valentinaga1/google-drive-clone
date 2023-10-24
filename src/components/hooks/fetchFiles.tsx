//@ Packages
import { database } from "@/firebaseConfig";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

const files = collection(database, "files");

// Function hook to get all the files from firebase
const FetchFiles = ( parentId: string, userEmail: string ) => {
  const [fileList, setFileList] = useState<ArrayType>([{
    imageLink: "", id:""
  }]);

  
  const getFolders = () => {
    if(userEmail) {
      const filteredFilesByEmailSession = query(files, where("userEmail", "==", userEmail));
      console.log("filteredFilesByEmailSession", filteredFilesByEmailSession);
      if (!parentId) {
        onSnapshot(filteredFilesByEmailSession, (response) => {
           setFileList(response.docs.map(item => {
           return {
             ...item.data(), id: item.id
           }
         }).filter(item => item.parentId === "")
        );
       });
      } else {
       onSnapshot(filteredFilesByEmailSession, (response) => {
           setFileList(response.docs.map(item => {
           return {
             ...item.data(), id: item.id
           }
         }).filter(item => item.parentId === parentId)
        );
       });
      }
    }
  }

  useEffect(() => {
    getFolders();
  }, [parentId, userEmail])

  return { fileList }
}

export default FetchFiles