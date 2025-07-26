import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex grow">
        <Outlet />
      </main>
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
};

export default Layout;
