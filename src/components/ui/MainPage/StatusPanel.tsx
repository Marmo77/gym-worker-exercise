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
} from "lucide-react";
import DummyUser from "../../../storage/Users";
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
          <div className="card-element">
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
          <button className="bg-chart-1/90 hover:bg-chart-1 _btn">
            <Plus className="img-small" />
            <h2>Add Exercise</h2>
            <span>Create new exercise</span>
          </button>
          <button className="bg-chart-2/90 hover:bg-chart-2 _btn">
            <UserPlus className="img-small" />
            <h2>Add Friend</h2>
            <span>Search & add your friends</span>
          </button>
          <button className="bg-chart-3/90 hover:bg-chart-3 _btn">
            <CalendarCheck className="img-small" />
            <h2>Schedule</h2>
            <span>View your calendary</span>
          </button>
          <button className="bg-chart-4/90 hover:bg-chart-4 _btn">
            <ChartColumnIncreasing className="img-small" />
            <h2>Statistic</h2>
            <span>Raport about your training</span>
          </button>
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
