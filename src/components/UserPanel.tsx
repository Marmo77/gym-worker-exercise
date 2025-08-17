import React, { useState, useEffect } from "react";
// import currentUser? from "../storage/Users";
import { getUserFromStorage } from "@/storage/Users";
import UserProfileCard from "./ui/UserPage/UserProfileCard";
import EditProfil from "./ui/UserPage/EditProfil";
import UserStatistics from "./ui/UserPage/UserStatistics";
import AddTrainingPlan from "./ui/UserPage/AddTrainingPlan";
import { useNavigate } from "react-router-dom";

const UserPanel = () => {
  const navigate = useNavigate();

  const currentUser = getUserFromStorage();
  const [user, setUser] = useState(localStorage.getItem("UserStatus") || null);
  useEffect(() => {
    // load user type from localStorage on mount
  }, [user]);
  const [editOpen, setEditOpen] = useState(false);

  const handleLogingout = () => {
    localStorage.removeItem("UserStatus");
    setUser(null);
    navigate("/");
  };
  // Prepare stats array
  const stats = [
    { label: "Exercises", value: currentUser?.exercise_completed ?? 0 },
    { label: "Friends", value: currentUser?.friends?.length ?? 0 },
    { label: "Days on App", value: currentUser?.days_on_app ?? 0 },
  ];

  return (
    <>
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
        <UserProfileCard
          username={currentUser?.username}
          name={currentUser?.name}
          status={currentUser?.status ?? "user"}
          avatarUrl={
            currentUser?.status == "admin"
              ? "./imgs/admin.jpg"
              : "./imgs/user.jpg"
          }
          email={currentUser?.email}
          localization={currentUser?.localization}
          data_of_join={currentUser?.data_of_join}
          stats={stats}
          onFollow={() => alert("Followed!")}
          onMessage={() => alert("Message sent!")}
          onEdit={() => setEditOpen(!editOpen)}
          Logout={() => handleLogingout()}
        />
        <UserStatistics />
        <AddTrainingPlan navigate={navigate} />
      </section>
      <EditProfil open={editOpen} onOpenChange={setEditOpen} />
    </>
  );
};

export default UserPanel;
