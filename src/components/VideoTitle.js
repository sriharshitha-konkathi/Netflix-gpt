import React from "react";

const VideoTitle = ({ title, overview }) => {
  //console.log("@@@@ title, overview", title, overview);
  return (
    <div className="w-screen aspect-video absolute bg-gradient-to-r from-black  pt-36 px-12">
      <div className="">
        <h1 className="text-5xl font-bold">{title}</h1>
        <p className="w-1/4 text-lg py-6">{overview}</p>
        <div className="flex gap-4 mt-4">
          <button className="px-6 py-2 bg-white text-black rounded-lg font-bold hover:bg-opacity-80">
            ▶ Play
          </button>
          <button className="px-6 py-2 bg-gray-700 rounded-lg font-bold">
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
