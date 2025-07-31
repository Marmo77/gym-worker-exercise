import React, { useEffect } from "react";
import Badge from "./ui/Badge";
import DummyUser from "../storage/Users";
import StatusPanel from "./ui/MainPage/StatusPanel";
import AdminPanel from "./AdminPanel";
import Categories from "./ui/MainPage/Categories";

const MainPage = () => {
  useEffect(() => {
    console.log(DummyUser);
  }, []);

  return (
    <section className="bg-background w-full">
      <div className="section">
        {/* WELCOME BACK */}
        <h1 className="text-3xl font-semibold">
          Welcome back{" "}
          <span
            className={`font-black ${
              DummyUser.status == "admin"
                ? "text-admin"
                : DummyUser.status == "premium"
                ? "text-premium"
                : "text-text"
            }`}
          >
            {DummyUser.username}
          </span>
          !
        </h1>
        <p className="text-lg font-light ml-2 text-muted-foreground">
          Menage exercises and show others your achievements and fitness goals.
        </p>
        {/* ADMIN PANEL SHOW */}
        {DummyUser.status === "admin" && <AdminPanel />}
      </div>
      <div className="section">
        <StatusPanel />
      </div>
      <div className="section">
        <h1>Exercise Categories</h1>
        <p>Wszystko si</p>
        <Categories />
      </div>
    </section>
  );
};

export default MainPage;
