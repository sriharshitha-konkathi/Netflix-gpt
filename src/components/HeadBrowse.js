import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Netflixlogo from "./Netflixlogo";

const HeadBrowse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    const user = auth.currentUser;
    signOut(auth)
      .then(() => {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/errorpage");
      });
  };
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4 bg-gradient-to-b from-black z-10 ">
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
        <img
          className="w-6 h-6"
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
