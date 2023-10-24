//@ Packages
import { NextApiRequest, NextApiResponse } from "next";
//@ Scripts
import { storage, app, database} from "../../firebaseConfig";

const firestore = (req: NextApiRequest, res:NextApiResponse ) => {
  res.status(200).json({ text: "Hellow"});
}

export default firestore;