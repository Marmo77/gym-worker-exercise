import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Dumbbell,
  Plus,
  Users,
  Calendar,
  CirclePlus,
  UserPlus,
  CalendarCheck,
  ChartColumnIncreasing,
} from "lucide-react";
import { AdminList, getUserFromStorage } from "../../../storage/Users";
import AdminPanel from "@/components/AdminPanel";
import AddFriend from "@/components/AddFriend";

const StatusPanel = () => {
  const quickactions = [
    {
      title: "Add Exercise",
      description: "Create new exercise",
      icon: <Plus className="img-small" />,
      button_color: "bg-chart-1/90 hover:bg-chart-1 ",
      function: () => {
        console.log(quickactions.at(0)?.title);
        window.location.href = "/user/training";
      },
    },
    {
      title: "Add Friend",
      description: "Search & add your friends",
      icon: <UserPlus className="img-small" />,
      button_color: "bg-chart-2/90 hover:bg-chart-2 ",
      function: () => {
        setOpenDialog(true);
        console.log(quickactions.at(1)?.title);
      },
    },
    {
      title: "Schedule",
      description: "View your calendary",
      icon: <CalendarCheck className="img-small" />,
      button_color: "bg-chart-3/90 hover:bg-chart-3 ",
      function: () => {
        console.log(quickactions.at(2)?.title);
      },
    },
    {
      title: "Statistic",
      description: "Raport about your training",
      icon: <ChartColumnIncreasing className="img-small" />,
      button_color: "bg-chart-4/90 hover:bg-chart-4",
      function: () => {
        console.log(quickactions.at(3)?.title);
      },
    },
  ];

  const currentuser = getUserFromStorage();
  // const handleAddFriend = () =>{

  const [openDialog, setOpenDialog] = useState(false);
  // }
  const handleClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <AddFriend
        open={openDialog}
        onClose={handleClose}
        setOpen={setOpenDialog}
      />
      <div className="grid md:grid-cols-2 grid-cols-1 md:h-auto gap-4">
        {/* MAIN USER GYM */}
        {/* STATISTICS */}
        <div className="card">
          <div className="__header">
            <div className="__title">
              <TrendingUp className="__img" />
              <h1>Gym Statistics</h1>
            </div>
            <p>Overview your statistics</p>
          </div>
          <div className="card_stats">
            <div className="card-element self-start">
              <Dumbbell className="_img" />
              <h3>{currentuser?.exercise_completed || 0}</h3>
              <h2>Exercises Completed</h2>
              <span>(This month)</span>
            </div>
            <div className="card-element self-start">
              <Users className="_img" />
              <h3>{currentuser?.friends?.length || 0}</h3>
              <h2>Your friends</h2>
            </div>
            <div className="card-element self-start">
              <Calendar className="_img" />
              <h3 className="">{currentuser?.days_on_app || 0}</h3>
              <h2>Days on app</h2>
            </div>
          </div>
        </div>
        {/* QUICK ACTIONS */}
        <div className="card">
          <div className="__header">
            <div className="__title">
              <CirclePlus className="__img" />
              <h1>Quick Actions</h1>
            </div>
            <p>Most usefull actions in one place</p>
          </div>
          <div className="quick-action gap-2">
            {quickactions.map((item, index) => (
              <button
                key={index}
                className={`hover:-translate-y-0.5 transition-all duration-500 _btn click-pressed ${item.button_color}`}
                onClick={item.function}
              >
                {item.icon}
                <h2>{item.title}</h2>
                <span>{item.description}</span>
              </button>
            ))}
          </div>
        </div>
        {/* ADMIN PANEL */}
        {/* ADMIN PANEL SHOW */}
        {AdminList.includes(currentuser?.username ?? "") &&
          currentuser?.status == "admin" && (
            <div className="card md:col-span-2">
              <AdminPanel />
            </div>
          )}
      </div>
    </>
  );
};

export default StatusPanel;
