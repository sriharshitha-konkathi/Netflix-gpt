import React, { useRef, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const [error, setError] = useState("");

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleGetStarted = () => {
    const email = emailRef.current.value;

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // You can store the email in localStorage if you want to prefill it in login page

    // Navigate to sign in
    navigate("/login");
  };

  return (
    <div>
      <div className="absolute -z-10 ">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20240313102506/NetlfixHome-min.jpeg"
          alt="bg Logo"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      <Header />

      <div className="flex justify-end px-24 py-6">
        <button
          className="text-white text-sm bg-red-600 px-4 py-2 rounded hover:bg-red-700 flex "
          onClick={() => navigate("/login")}
        >
          Sign In
        </button>
      </div>

      <div className="absolute mx-auto right-0 left-0  flex flex-col items-center justify-center w-full h-full text-white text-center p-6 ">
        <h1 className="text-4xl md:text-6xl font-bold mx-[160px]">
          Unlimited movies, TV shows and more
        </h1>
        <h2 className="text-2xl mt-4">Watch anywhere. Cancel anytime.</h2>
        <p className="text-sm mt-6">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <div className="flex flex-col md:flex-row mt-6 w-full md:w-1/2">
          <input
            ref={emailRef}
            type="email"
            placeholder="Email address"
            className="p-3 flex-1 outline-none bg-slate-900 bg-opacity-40 border rounded"
          />
          <button
            className="px-8 bg-red-600 hover:bg-red-700 mt-4 md:mt-0 md:ml-2 font-bold rounded"
            onClick={handleGetStarted}
          >
            Get Started
          </button>
        </div>

        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default SignUp;
