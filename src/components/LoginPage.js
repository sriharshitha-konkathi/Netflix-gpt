// File: LoginPage.js
import React from "react";
import Header from "./Header";
import LoginForm from "./LoginForm";
import { BG_LOGO } from "../utils/constants";

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div className="absolute -z-10">
        <img src={BG_LOGO} alt="bg Logo" />

        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
