import { Outlet } from "react-router-dom";
import Footer from "../layout/Footer"; // jeśli masz
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface BaseLayoutProps {
  NavbarComponent: React.ReactNode;
}

const BaseLayout = ({ NavbarComponent }: BaseLayoutProps) => {
  useEffect(() => {
    AOS.init({
      duration: 500, // czas animacji w ms
      once: true, // animuj tylko raz
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div data-aos="fade-down">{NavbarComponent}</div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default BaseLayout;
