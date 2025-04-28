import React from "react";
import HeadBrowse from "./HeadBrowse";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="relative bg-black text-white min-h-screen">
      <HeadBrowse />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
