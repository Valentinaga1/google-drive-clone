import { storage } from "../firebaseConfig";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { addFiles } from "./FireStore";

export const fileUpload = async (
  file: any,
  setProgress: Function,
  parentId: string,
  userEmail: string,
  // ownerEmail: string
) => {
  const storageRef = ref(storage, `files/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      console.log("progress", progress);
      setProgress(progress);
    },
    (error) => {
      alert(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("downloadURL", downloadURL);
        addFiles(downloadURL, file.name, parentId, userEmail);
        // addFiles(downloadURL, file.name, parentId, userEmail, ownerEmail);
      });
    }
  );
};