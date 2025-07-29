import React from "react";
import DummyUser from "../storage/Users";

const UserPanel = () => {
  return <div>This is page of you - {DummyUser.name}!</div>;
};

export default UserPanel;
