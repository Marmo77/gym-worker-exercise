import React from "react";
import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_EXERCISE_API_KEY;
import { Dumbbell, Heart, Timer, Activity } from "lucide-react";

interface Exercise {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}
const Categories = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchExercises() {
      try {
        const res = await fetch(
          "https://api.api-ninjas.com/v1/exercises?muscle=biceps",
          {
            headers: {
              "X-Api-Key": API_KEY,
            },
          }
        );

        if (!res.ok) {
          const errorText = await res.text();
          throw new Error(`API error: ${res.status} - ${errorText}`);
        }

        const data: Exercise[] = await res.json();
        setExercises(data);
      } catch (e: any) {
        setError(e.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchExercises();
  }, []);

  // Define categories separately to avoid redeclaration and syntax errors
  const categories = [
    {
      title: "Strength Training",
      description: "Build muscle and improve strength",
      icon: <Dumbbell className="img-big" />,
      color: "chart-1",
      count: 45,
    },
    {
      title: "Cardio",
      description: "Improve cardiovascular health",
      icon: <Heart className="img-big" />,
      color: "chart-2",
      count: 28,
    },
    {
      title: "HIIT",
      description: "High-intensity interval training",
      icon: <Timer className="img-big" />,
      color: "chart-3",
      count: 22,
    },
    {
      title: "Flexibility",
      description: "Stretching and mobility exercises",
      icon: <Activity className="img-big" />,
      color: "chart-4",
      count: 18,
    },
  ];
  return (
    <div className="text-accent-foreground text-2xl font-dmsans font-semibold">
      <h1>Exercise Categories</h1>
      {/*1.  CATEGORY MENU (CHANGING CATEGORIES BAR) select on bar and then changing the function loading */}

      {/*1. SHOWING  4 CATEGORIES  type = cardio,strength, plyometrics, powerlifting*/}

      {/* ADD FUNCTIONALITY ON EVERY OF EXERCISES (--ADD EXERCISE (adding to every user individual training plan and make it possible for user to click COMPLETE to add this exercises as complited to user account)) */}

      {/* <div className="section">
        <h2>Exercises for Biceps</h2>
        {loading && <p>Loading exercises...</p>}
        {error && <p className="text-red-600">Error: {error}</p>}
        {!loading && !error && (
          <ul>
            {exercises.map((exercise) => (
              <li key={exercise.name} className="mb-2">
                <strong>{exercise.name}</strong> - {exercise.equipment} -{" "}
                {exercise.difficulty}
                <p>{exercise.instructions}</p>
              </li>
            ))}
          </ul>
        )}
      </div> */}
      <div className="grid grid-cols-1 max-sm:gap-8 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 py-12">
        {categories.map((cat, i) => (
          <div key={i} className="exercise_category group click-pressed ">
            <div className="flex max-sm:flex-col gap-4 items-center justify-between max-sm:justify-center">
              <div className={`p-3 rounded-2xl shadow-lg bg-${cat.color}`}>
                {cat.icon}
              </div>
              <div className="text-xs font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-2xl">
                {cat.count}
              </div>
            </div>
            <div className="sm:mt-2 max-sm:text-center">
              <div className="text-sm font-semibold">{cat.title}</div>
              <div className="text-xs text-gray-500">{cat.description}</div>
            </div>
            <div
              className={`h-1 rounded-full bg-${cat.color} md:group-hover:w-[75%] max-sm:mx-auto duration-500 transition-all w-[55%]`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
