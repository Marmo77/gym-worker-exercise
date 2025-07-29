import React, { useEffect } from "react";
import Badge from "./ui/Badge";
import DummyUser from "../storage/Users";
import StatusPanel from "./ui/UserPage/StatusPanel";
import AdminPanel from "./AdminPanel";

const UserPage = () => {
  useEffect(() => {
    console.log(DummyUser);
  }, []);

  return (
    <section className="bg-background w-full">
      <div className="max-w-7xl px-14 mx-auto text-left flex flex-col gap-18 mt-18">
        {/* WELCOME BACK */}
        <div className="font-redhat">
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
              {DummyUser.name}
            </span>
            !
          </h1>
          <p className="text-lg font-light ml-2 text-muted-foreground">
            Menage exercises and show others your achievements and fitness
            goals.
          </p>
        </div>
        {/* ADMIN PANEL SHOW */}
        {DummyUser.status === "admin" && <AdminPanel />}
        <StatusPanel />
      </div>
    </section>
  );
};

export default UserPage;
