import React, { useState } from "react";
import DummyUser from "../storage/Users";
import UserProfileCard from "./ui/UserPage/UserProfileCard";
import EditProfil from "./ui/UserPage/EditProfil";

const UserPanel = () => {
  const [editOpen, setEditOpen] = useState(false);

  // Prepare stats array
  const stats = [
    { label: "Exercises", value: DummyUser.exercise_completed ?? 0 },
    { label: "Friends", value: DummyUser.friends?.length ?? 0 },
    { label: "Days on App", value: DummyUser.days_on_app ?? 0 },
  ];

  return (
    <>
      <UserProfileCard
        username={DummyUser.username}
        name={DummyUser.name}
        status={DummyUser.status ?? "user"}
        avatarUrl="/imgs/dummy1.jpg"
        email={DummyUser.email}
        localization={DummyUser.localization}
        data_of_join={DummyUser.data_of_join}
        stats={stats}
        onFollow={() => alert("Followed!")}
        onMessage={() => alert("Message sent!")}
        onEdit={() => setEditOpen(!editOpen)}
      />
      <EditProfil open={editOpen} onOpenChange={setEditOpen} />
    </>
  );
};

export default UserPanel;
