import React from "react";

const Music = ({ data }) => {
  return (
    <div className="lg:w-1/2 w-2/3 mx-auto my-6">
      <div
        className="relative w-full h-0 mx-auto"
        style={{ paddingBottom: "56.25%" }}
      >
        <iframe
          className="absolute w-full h-full top-0 left-0"
          src={data.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Music;
