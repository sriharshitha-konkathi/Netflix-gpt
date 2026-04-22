import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkValidateData } from "../utils/Validate";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSignUpClick = () => navigate("/signup");

  const handleButtonClick = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    // Directly dispatch user to Redux and navigate to browse bypassing Firebase
    dispatch(addUser({
        uid: "dummy-local-user-" + Date.now(),
        email: email.current.value,
        displayName: name.current?.value || "Test User",
    }));
    navigate("/browse");
  };

  return (
    <div className="absolute bg-black bg-opacity-80 p-14 w-80 my-20 mx-auto right-0 left-0 text-white">
      <h1 className="font-bold text-2xl mb-6">Sign In</h1>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col space-y-4"
      >
        <input
          ref={name}
          type="text"
          placeholder="Full Name"
          className="p-2 rounded bg-gray-700 placeholder-gray-400"
        />
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-2 rounded bg-gray-700 placeholder-gray-400"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 rounded bg-gray-700 placeholder-gray-400"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          onClick={handleButtonClick}
          className="p-1 my-1 bg-red-600 rounded transition-colors font-semibold"
        >
          Sign In
        </button>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
          <div>
            <input type="checkbox" id="remember" className="mr-1" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button className="hover:underline">Need help?</button>
        </div>
        <div className="mt-6 text-center text-gray-400 text-sm">
          New to Netflix?{" "}
          <span
            onClick={handleSignUpClick}
            className="text-white hover:underline cursor-pointer"
          >
            Sign up now
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
