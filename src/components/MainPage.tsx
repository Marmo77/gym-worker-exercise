import React, { useEffect, useState } from "react";
import Badge from "./ui/Badge";
import DummyUser from "../storage/Users";
import StatusPanel from "./ui/MainPage/StatusPanel";
import AdminPanel from "./AdminPanel";
import Categories from "./ui/MainPage/Categories";

const MainPage = () => {
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
        <Categories />
      </div>
      <div className="section">
        {/* 2. CREATE COMPONENT "Featured Exercises" - GIVE *RANDOM* 4 exercises  and add  BUTTON "View ALL" EXERCISE and LIST OF ALLEXERCISE (https://api.api-ninjas.com/v1/allexercises) WITH FILTER ON MUSCLE GROUPS AND DIFFICULTY */}
      </div>
    </section>
  );
};

export default MainPage;
