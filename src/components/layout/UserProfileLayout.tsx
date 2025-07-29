import React from "react";
import { Outlet } from "react-router";
import UserNavbar from "./UserNavbar";
import Footer from "./Footer";
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <UserNavbar />
      <main className="flex grow">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
