import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_LOGO } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={BG_LOGO}
          alt="bg-logo"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearchPage;
