import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import config from "./config";

const app = initializeApp(config);
const db = getFirestore(app);

async function getData(db, path) {
  const col = collection(db, path);
  const snapshot = await getDocs(col);
  const randomIndex = _getRandomIndx(snapshot.size);
  const data = snapshot.docs[randomIndex].data();
  return data;
}

function _getRandomIndx(size) {
  return Math.floor(Math.random() * size);
}

export { getData, db };
