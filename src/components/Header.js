import React from "react";
import Netflixlogo from "./Netflixlogo";

const Header = () => {
  return (
    <div className="absolute z-10 px-8 py-4 bg-gradient-to-b from-black flex justify-between items-center w-full">
      <Netflixlogo />
    </div>
  );
};

export default Header;
