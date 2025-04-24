import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Netflixlogo from "./Netflixlogo";

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        const { uid, email, displayName } = auth.currentUser;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/errorpage");
      });
  };
  return (
    <div className=" bg-black min-h-screen text-white ">
      <div className="flex justify-between">
        <div className="flex justify-between items-center gap-3 ">
          <Netflixlogo />
          <nav className="flex gap-4 text-sm font-semibold">
            <button className="hover:text-gray-400">Home</button>
            <button className="hover:text-gray-400">TV Shows</button>
            <button className="hover:text-gray-400">Movies</button>
            <button className="hover:text-gray-400">New & Popular</button>
            <button className="hover:text-gray-400">My List</button>
          </nav>
        </div>
        <div className="flex items-center p-4">
          <img
            className="w-6"
            alt="user Icon"
            src=" https://occ-0-4857-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXYofKdCJceEP7pdxcEZ9wt80GsxEyXIbnG_QM8znksNz3JexvRbDLr0_AcNKr2SJtT-MLr1eCOA-e7xlDHsx4Jmmsi5HL8.png?r=1d4"
          />
          <button onClick={handleSignOut} className="font-bold hover:underline">
            (Sign Out)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Browse;
