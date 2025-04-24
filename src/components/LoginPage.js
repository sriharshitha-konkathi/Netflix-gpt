import React, { useRef, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { checkValidateData } from "../utils/Validate";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

//this also a sign in Page
const LoginPage = () => {
  const navigate = useNavigate();
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    //copied from firebase docs authetication
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Signed in:", user);
        // You can navigate to the browse/home page here
        // navigate("/browse");
      })
      .catch((error) => {
        console.log("Firebase error:", error);
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-" + errorMessage);
      });
  };

  return (
    <div>
      <Header />
      <div className="absolute  -z-10  ">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240313102506/NetlfixHome-min.jpeg"
          alt="bg Logo"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute  bg-black bg-opacity-80 p-14 w-80 my-20 mx-auto right-0 left-0  text-white">
        <h1 className="font-bold text-2xl mb-6 ">Sign In</h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col space-y-4"
        >
          <input
            ref={email}
            type="text"
            placeholder="Email or phone number"
            className="p-2 rounded bg-gray-700 placeholder-gray-400  "
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-2 rounded bg-gray-700  placeholder-gray-400  "
          />

          <p className="text-red-500"> {errorMessage}</p>
          <button
            className="p-1 my-1  bg-red-600 rounded transition-colors font-semibold "
            onClick={handleButtonClick}
          >
            Sign In
          </button>
          {/* Extra Options */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <div>
              <input type="checkbox" id="remember" className="mr-1" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <button className="hover:underline">Need help?</button>
          </div>
          {/* Sign Up Link */}
          <div className="mt-6 text-center text-gray-400 text-sm">
            New to Netflix?{" "}
            <span
              className="text-white hover:underline cursor-pointer"
              onClick={handleSignUpClick}
            >
              Sign up now
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
