import React from "react";

const VideoTitle = ({ title, overview }) => {
  //console.log("@@@@ title, overview", title, overview);
  return (
    <div className="w-screen aspect-video absolute bg-gradient-to-r from-black  pt-36 px-12">
      <div className="">
        <h1 className="text-3xl md:text-5xl font-bold drop-shadow-xl">{title}</h1>
        <p className="hidden md:block w-full md:w-2/5 text-sm md:text-lg py-6 drop-shadow-md">{overview}</p>
        <div className="flex gap-4 mt-2 md:mt-4">
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
