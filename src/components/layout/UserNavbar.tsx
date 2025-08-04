import React, { useState } from "react";
import { Share2, Settings, MoveLeft } from "lucide-react";
import DummyUser from "../../storage/Users";

function UserNavbar() {
  return (
    <header className="bg-background shadow-lg backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <a href="/">
              <div className="flex gap-3 relative text-muted-foreground items-center">
                <MoveLeft className="img-small text-muted-foreground" />
                <span className="text-sm">Back to Dashboard</span>
              </div>
            </a>
            {/* DASH LINE */}
            <div className="text-muted-foreground">|</div>
            <div className="flex gap-2.5 font-poppins">
              <span
                className={
                  DummyUser.status === "user"
                    ? "text-primary"
                    : DummyUser.status === "premium"
                    ? "text-premium"
                    : DummyUser.status === "admin"
                    ? "text-admin"
                    : "text-accent-foreground"
                }
              >
                {DummyUser.name}
              </span>
              Profil
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* SHARE AND SETTINGS */}
            <button className="flex gap-4 items-center text-sm px-2 py-1.5 rounded-lg shadow-md bg-accent/40 group hover:scale-105 duration-300 transition-all hover:bg-accent click-pressed">
              <Share2 className="img-small text-accent-foreground group-hover:-rotate-4 group-hover:scale-[110%] duration-200 delay-75" />
              <span>Share profile</span>
            </button>
            <button className="px-2 py-1.5 rounded-lg text-accent-foreground shadow-md hover:bg-accent group transition-colors duration-300 click-pressed">
              <Settings
                className="img-small
                group-hover:scale-105 group-hover:rotate-3 text-accent-foreground"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default UserNavbar;
