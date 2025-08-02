import React from "react";
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
  Target,
} from "lucide-react";
import DummyUser from "../../../storage/Users";
const quickactions = [
  {
    title: "Add Exercise",
    description: "Create new exercise",
    icon: <Plus className="img-small" />,
    button_color: "bg-chart-1/90 hover:bg-chart-1 ",
  },
  {
    title: "Add Friend",
    description: "Search & add your friends",
    icon: <UserPlus className="img-small" />,
    button_color: "bg-chart-2/90 hover:bg-chart-2 ",
  },
  {
    title: "Schedule",
    description: "View your calendary",
    icon: <CalendarCheck className="img-small" />,
    button_color: "bg-chart-3/90 hover:bg-chart-3 ",
  },
  {
    title: "Statistic",
    description: "Raport about your training",
    icon: <ChartColumnIncreasing className="img-small" />,
    button_color: "bg-chart-4/90 hover:bg-chart-4",
  },
];

const StatusPanel = () => {
  return (
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
            <h3>{DummyUser.exercise_completed || 0}</h3>
            <h2>Exercises Completed</h2>
            <span>(This month)</span>
          </div>
          <div className="card-element self-start">
            <Users className="_img" />
            <h3>{DummyUser.friends?.length || 0}</h3>
            <h2>Your friends</h2>
          </div>
          <div className="card-element self-start">
            <Calendar className="_img" />
            <h3 className="">{DummyUser.days_on_app || 0}</h3>
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
          <p>Dym w progress</p>
        </div>
        <div className="quick-action gap-2">
          {quickactions.map((item, index) => (
            <button
              key={index}
              className={`hover:-translate-y-0.5 transition-all duration-500 _btn click-pressed ${item.button_color}`}
            >
              {item.icon}
              <h2>{item.title}</h2>
              <span>{item.description}</span>
            </button>
          ))}
        </div>
      </div>
      {/* ADMIN PANEL */}
      {DummyUser.status == "admin" && (
        <div className="card md:col-span-2">
          <div className="__header">
            <h1 className="">Admin</h1>
            <p className="">Overwie</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatusPanel;
