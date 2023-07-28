import React from "react";
import Navbar from "../navbar/navbar.component";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

function RootLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
