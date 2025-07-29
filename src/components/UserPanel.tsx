import React from "react";
import DummyUser from "../storage/Users";

const UserPanel = () => {
  return <div className="section">This is page of you - {DummyUser.name}!</div>;
};

export default UserPanel;
