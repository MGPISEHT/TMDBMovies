import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="bg-gray-800 min-h-screen">
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
