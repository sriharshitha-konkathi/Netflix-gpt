import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import Netflixlogo from "./Netflixlogo";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const HeadBrowse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    dispatch(removeUser());
    navigate("/");
  };

  const handleGptSearch = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-gradient-to-b from-black z-50 ">
      {/* LEFT PART - Logo + Navbar */}
      <div className="flex  items-center gap-6 ">
        <Netflixlogo />
        <nav className="flex gap-10 text-m font-semibold">
          <button className="hover:text-gray-400">Home</button>
          <button className="hover:text-gray-400">TV Shows</button>
          <button className="hover:text-gray-400">Movies</button>
          <button className="hover:text-gray-400">New & Popular</button>
          <button className="hover:text-gray-400">My List</button>
        </nav>
      </div>

      {/* RIGHT PART - User Icon + Sign Out */}

      <div className="flex items-center gap-1">
        {showGptSearch && (
          <select
            className="px-4 py-2 bg-gray-600 text-white"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
        )}

        <button
          className="px-4 py-1 mx-4 font-bold bg-purple-800"
          onClick={handleGptSearch}
        >
          GPT Search
        </button>
        <img
          className="w-8 h-8"
          alt="user Icon"
          src=" https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
        />
        <button
          onClick={handleSignOut}
          className="font-semibold hover:underline text-sm"
        >
          (Sign Out)
        </button>
      </div>
    </div>
  );
};

export default HeadBrowse;
