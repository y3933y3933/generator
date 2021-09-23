import React from "react";
import MusicIcon from "../icons/MusicIcon";
import BookIcon from "../icons/BookIcon";
import Loading from "./Loading";
import { useState } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import config from "../config";

const app = initializeApp(config);
const db = getFirestore(app);

async function getData(db, path) {
  const col = collection(db, path);
  const snapshot = await getDocs(col);
  const randomIndex = getRandomIndx(snapshot.size);
  const data = snapshot.docs[randomIndex].data();
  return data;
}

function getRandomIndx(size) {
  return Math.floor(Math.random() * size);
}

const Selector = (props) => {
  const [selected, setSelected] = useState("music");
  const [isLoading, setIsLoading] = useState(false);

  function generate() {
    setIsLoading(true);
    getData(db, selected)
      .then((data) => {
        props.setData(data);
        props.setType(selected);
        setIsLoading(false)
      })
      .catch((e) => {
        props.setData(null);
      });
  }

  return (
    <div className="flex justify-center items-center mt-10">
      {isLoading && <Loading />}
      <div
        className={`cursor-pointer p-6 border-4 mr-6 ${
          selected === "music" ? "border-red-600" : ""
        }`}
        onClick={() => setSelected("music")}
      >
        <MusicIcon width="4rem" height="4rem" />
      </div>
      <div
        className={`cursor-pointer p-6 border-4 mr-6 ${
          selected === "book" ? "border-red-600" : ""
        }`}
        onClick={() => setSelected("book")}
      >
        <BookIcon width="4rem" height="4rem" />
      </div>
      <button
        onClick={() => generate()}
        className="shadow py-4 px-8 rounded-md uppercase bg-primary text-white tracking-widest hover:bg-primaryLight"
      >
        Generate!
      </button>
    </div>
  );
};

export default Selector;
