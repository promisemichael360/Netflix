import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomeScreen from "./components/HomeScreen";
import ProfileScreen from "./components/ProfileScreen";
import Login from "./components/login_screen_component/Login";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "profile",
        element: <ProfileScreen />,
      },
      {
        path: "login",
        element: <Login />,
      },
      
    ],
  },
]);

export default router;