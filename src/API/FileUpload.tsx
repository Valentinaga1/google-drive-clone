//@ Packages
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

//@ Scripts
import { storage } from "../firebaseConfig";
import { addFiles } from "./FireStore";

//Function to upload the data in firebase
export const fileUpload =  (
  file: File,
  // eslint-disable-next-line @typescript-eslint/ban-types
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
      void getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("downloadURL", downloadURL);
        void addFiles(downloadURL, file.name, parentId, userEmail);
        // addFiles(downloadURL, file.name, parentId, userEmail, ownerEmail);
      });
    }
  );
};