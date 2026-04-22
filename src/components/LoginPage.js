// File: LoginPage.js
import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import { BG_LOGO } from "../utils/constants";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="absolute top-0 left-0 w-full z-50 bg-yellow-500 text-black text-center font-bold p-3 opacity-90 shadow-lg">
        ⚠️ EDUCATIONAL PORTFOLIO PROJECT: This is a UI clone and NOT the real Netflix. Do NOT enter real passwords!
      </div>
      <div className="absolute inset-0 -z-10 mt-12">
        <img src={BG_LOGO} alt="bg Logo" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
