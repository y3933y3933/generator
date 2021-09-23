import React from "react";

const Music = ({ data }) => {
  return (
    <div>
      {data.url && (
        <div className="w-9/12 mx-auto my-6 flex flex-col items-center">
          {/* <div className="bg-gray-200 p-4 mb-6 text-center">{data.lyrics}</div> */}
          <iframe
            width="560"
            height="315"
            src={data.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
      {/*  */}
    </div>
  );
};

export default Music;
