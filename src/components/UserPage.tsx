import React from "react";
import Badge from "./ui/Badge";
import DummyUser from "../storage/Users";

const UserPage = () => {
  return (
    <section className="bg-background w-full">
      <div>
        {/* WELCOME BACK */}
        <div className="">
          <h1>Welcome back {DummyUser.name}!!</h1>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
