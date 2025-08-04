import React from "react";
import {
  Trophy,
  Target,
  Goal,
  Award,
  TrendingUp,
  Flame,
  Clock,
} from "lucide-react";
import DummyUser from "@/storage/Users";

interface Statistics {
  id: number;
  title: string;
  icon?: React.ReactNode;
  value: number | string;
  color: string;
}

const colorClasses: Record<string, string> = {
  blue: "from-blue-500 to-blue-600 text-blue-600/80",
  purple: "from-purple-500 to-purple-600 text-purple-600/80",
  green: "from-green-500 to-green-600 text-green-600/80",
  red: "from-red-500 to-red-600 text-red-600/80",
  blue2: "from-sky-500 to-sky-600 text-sky-600/80",
  orange: "from-orange-500 to-orange-600 text-orange-600/80",
};

const Stats: Statistics[] = [
  {
    id: 1,
    title: "Total Workouts",
    icon: <Trophy className="img-big" />,
    value: DummyUser.total_workouts,
    color: "blue",
  },
  {
    id: 2,
    title: "Avg Duration",
    icon: <Clock className="img-big" />,
    value: DummyUser.exercise_completed,
    color: "purple",
  },
  {
    id: 3,
    title: "Exercises Completed",
    icon: <Target className="img-big" />,
    value: DummyUser.exercise_completed,
    color: "green",
  },
  {
    id: 4,
    title: "Current Streak",
    icon: <Flame className="img-big" />,
    value: DummyUser.current_streak,
    color: "red",
  },
  {
    id: 5,
    title: "Best Streak",
    icon: <TrendingUp className="img-big" />,
    value: DummyUser.best_streak,
    color: "blue2",
  },
  {
    id: 6,
    title: "Goals Achieved",
    icon: <Goal className="img-big" />,
    value: DummyUser.goals.length,
    color: "orange",
  },
];

const UserStatistics = () => {
  return (
    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
        {Stats.map((item, index) => (
          <div
            key={item.id}
            className={`rounded-2xl shadow-2xl px-12 py-4 flex flex-col gap-2 items-center shadow-xl/40 transition-transform duration-200 hover:-translate-y-2
              ${
                index % 2 !== 0 ? "-translate-y-1.5 hover:-translate-y-2.5" : ""
              }`}
          >
            <div
              className={` rounded-full bg-gradient-to-br ${
                colorClasses[item.color]
              } w-16 h-16 flex items-center justify-center mb-2`}
            >
              {item.icon ? item.icon : <Award className="img-big" />}
            </div>
            <h1 className="font-bold text-center text-lg">{item.value}</h1>
            <h2
              className={`text-sm ${
                colorClasses[item.color]
              } text-center font-montserrat`}
            >
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStatistics;
