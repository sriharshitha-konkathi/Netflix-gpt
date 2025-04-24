import React from "react";
import LoginPage from "./LoginPage";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import SignUp from "./SignUp";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/signup",
      element: <SignUp />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
