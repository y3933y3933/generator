import React from "react";

const Book = ({ data }) => {
  let text = "";
  text = data.sentences.split("\\n").join("<br/>");

  return (
    <div className="w-9/12 mx-auto bg-gray-200 my-6 p-4">
      <div
        className="text-center text-sm leading-6 md:text-lg md:leading-10"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
      <div className="md:text-sm text-xs text-right">
        --{data.author}《{data.title}》
      </div>
    </div>
  );
};

export default Book;
