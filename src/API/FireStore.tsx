//@ Packages
import { database } from "../firebaseConfig";
import { collection, addDoc, doc, updateDoc, getDoc } from "firebase/firestore";

const files = collection(database, "files");

// Function add files in firebase
export const addFiles = async (
  imageLink: string,
  imageName: string,
  parentId: string,
  userEmail: string,
  // ownerEmail: string
) => {
  try {
    await addDoc(files, {
      imageLink: imageLink,
      imageName: imageName,
      isFolder: false,
      parentId: parentId,
      userEmail: userEmail,
      // sharedTo: ownerEmail ? [ownerEmail] : [],
    });
  } catch (err) {
    console.log(err);
  }
};

// Function add folders in firebase
export const addFolder = async (payload: {
  folderName: string,
  isFolder: boolean,
  fileList: object,
  parentId: string,
  userEmail: string
}) => {
  try {
    await addDoc(files, {
      folderName: payload.folderName,
      isFolder: payload.isFolder,
      fileList: payload.fileList,
      parentId: payload.parentId,
      userEmail: payload.userEmail,
    });
  } catch (err) {
    console.log(err);
  }
};

// export const shareFiles = async (email: string, currentFileId: string) => {
//   try {
//     let sharedFileDoc = doc(files, currentFileId);

//     let response = await getDoc(sharedFileDoc);

//     await updateDoc(sharedFileDoc, {
//       sharedTo: [...response.data()?.sharedTo, email],
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// export const fetchCurrentFolders = async (parentId: string) => {
//   try {
//     let currentFolder = doc(files, parentId);

//     let response = await getDoc(currentFolder);
//     return response.data()?.userEmail;
//   } catch (err) {
//     console.log(err);
//   }
// };