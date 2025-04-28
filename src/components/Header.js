import React, { useEffect } from "react";
import Netflixlogo from "./Netflixlogo";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubcribes when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div className="absolute z-10 px-8 py-4 bg-gradient-to-b from-black">
      <Netflixlogo />
    </div>
  );
};

export default Header;
