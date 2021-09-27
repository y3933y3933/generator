import React from "react";
import { useState } from "react";
import MusicIcon from "../icons/MusicIcon";
import BookIcon from "../icons/BookIcon";
import { CryingFace, LoudlyCryingFace } from "../icons/CryingIcon";

const Selector = ({ generate }) => {
  const [selected, setSelected] = useState(null);
  const [isIconHover, setIsIconHover] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <div
        className={`cursor-pointer sm:w-36 sm:p-6 border-4 w-20 p-4 mr-6 ${
          selected === "music" ? "border-red-600" : ""
        }`}
        onClick={() => setSelected("music")}
      >
        <MusicIcon width="100%" height="100%" />
      </div>
      <div
        className={`cursor-pointer sm:w-36 sm:p-6 border-4 w-20 p-4 mr-6 ${
          selected === "book" ? "border-red-600" : ""
        }`}
      >
        <BookIcon
          width="100%"
          height="100%"
          onClick={() => setSelected("book")}
        />
      </div>
      <button
        className="w-10"
        onMouseOver={() => setIsIconHover(true)}
        onMouseLeave={() => setIsIconHover(false)}
        onClick={() => generate(selected)}
      >
        {isIconHover ? (
          <LoudlyCryingFace width="100%" height="100%" />
        ) : (
          <CryingFace width="100%" height="100%" />
        )}
      </button>
    </div>
  );
};

export default Selector;
