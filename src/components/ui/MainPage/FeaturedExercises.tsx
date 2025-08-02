import { get } from "http";
import { Dot, Target, Clock3, Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_EXERCISE_API_KEY;
interface Exercise {
  name: string;
  type: string;
  muscle: string;
  equipment: string;
  difficulty: string;
  instructions: string;
}
const FeaturedExercises = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const random_muscle = [
    "chest",
    "glutes",
    "forearms",
    "triceps",
    "quadriceps",
    "biceps",
    "middle_back",
  ];

  useEffect(() => {
    async function fetchRandomExercises() {
      setLoading(true);
      setError(null);
      try {
        const difficulties = ["beginner", "intermediate", "expert"];
        const results: Exercise[] = [];

        for (const difficulty of difficulties) {
          let found = false;
          let data: Exercise[] = [];
          // Try up to 5 times to get a non-empty result
          while (!found) {
            const muscle =
              random_muscle[Math.floor(Math.random() * random_muscle.length)];
            const res = await fetch(
              `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&difficulty=${difficulty}`,
              {
                headers: {
                  "X-Api-Key": API_KEY,
                },
              }
            );
            if (!res.ok) {
              const errorText = await res.text();
              setError(`API error: ${res.status} - ${errorText}`);
              break; // Stop further requests if API fails
            }
            data = await res.json();
            if (data.length > 0) {
              found = true;
              results.push(data[Math.floor(Math.random() * data.length)]);
            }
          }
          // If still not found, push a placeholder
          if (!found) {
            results.push({
              name: "No exercise found",
              type: "strength", // or leave as "" if you want
              muscle: "-",
              equipment: "-",
              difficulty: difficulty,
              instructions: `No ${difficulty} exercise available for this category.`,
            });
          }
        }
        setExercises(results.slice(0, 3));
      } catch (e: any) {
        setError(e.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchRandomExercises();
  }, []);

  //   DIFFICULTY
  const getDifficulty = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return {
          color:
            "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-300",
          dots: 1,
          dot_col: "bg-green-400",
        };
      case "intermediate":
        return {
          color:
            "bg-gradient-to-r from-yellow-100 to-orange-200 text-orange-800 border-orange-300",
          dots: 2,
          dot_col: "bg-orange-400",
        };
      case "expert":
        return {
          color:
            "bg-gradient-to-r from-red-100 to-red-200 text-red-800 border-red-300",
          dots: 3,
          dot_col: "bg-red-500",
        };
      default:
        return {
          color:
            "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border-gray-300",
          dots: 1,
          dot_col: "bg-gray-300",
        };
    }
  };

  // Skeleton loader for lazy loading
  const SkeletonCard = () => (
    <div className="featured_exercises flex flex-col gap-6 animate-pulse bg-gray-100 rounded-xl p-4">
      <div className="h-6 bg-gray-300 rounded w-2/3 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
      <div className="h-8 bg-gray-200 rounded w-full"></div>
    </div>
  );

  return (
    <div className="flex flex-col gap-6 mb-60">
      <h1 className="text-accent-foreground text-2xl font-dmsans font-semibold">
        Featured Exercises
      </h1>
      <div className="grid grid-cols-3 gap-6 px-6">
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <SkeletonCard key={i} />)
          : exercises.map((item, index) => (
              <div
                key={index}
                className="featured_exercises flex flex-col gap-6  group"
              >
                <div className="flex justify-between px-4">
                  <div className="flex flex-col gap-1">
                    <div
                      className={`text-lg font-semibold font-dmsans group-hover:scale-110 duration-700 delay-200 group-hover:text-chart-1 `}
                    >
                      {item.name}
                    </div>
                    <div className="text-xs font-montserrat text-muted-foreground font-medium px-1">
                      {item.type == "olympic_weightlifting"
                        ? "Weightlifting"
                        : item.type}
                    </div>
                  </div>
                  <div
                    className={`${
                      getDifficulty(item.difficulty).color
                    } px-3 text-xs h-fit py-1 rounded-xl flex gap-1`}
                  >
                    <div className="flex items-center gap-2 text-xs font-dmsans">
                      {item.difficulty}
                      <div className="flex gap-0.5">
                        {Array.from({ length: 3 }).map((_, i) => {
                          const isActive =
                            i < getDifficulty(item.difficulty).dots;
                          return (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-2xl ${
                                isActive
                                  ? `${getDifficulty(item.difficulty).dot_col}`
                                  : `${
                                      getDifficulty(item.difficulty).dot_col
                                    } opacity-30`
                              }`}
                            />
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Types -> bodyweight, cable, etc. */}
                <div className="flex px-4 text-sm self-start">
                  <div className="px-3 py-1 flex gap-2 items-center rounded-lg capitalize font-roboto group hover:bg-chart-1/20 hover:text-chart-1 text-gray-600 duration-500 hover:-translate-y-1">
                    <Clock3 className="img-small text-chart-1/80" />
                    <span className="tracking-wide lowercase">
                      {item.difficulty == "beginner" &&
                      item.equipment == "body_only"
                        ? "3 sets x 15 reps"
                        : item.difficulty == "beginner" &&
                          item.equipment != "other"
                        ? "3 sets x 12 reps"
                        : item.difficulty == "intermediate"
                        ? "3 sets x 8-10 reps"
                        : item.difficulty == "expert"
                        ? "3 sets x 8 reps"
                        : item.difficulty == "beginner" &&
                          item.equipment == "other"
                        ? "30-45 sec"
                        : ""}
                    </span>
                  </div>
                  <div className="px-3 py-1 flex gap-2 items-center rounded-lg capitalize font-roboto group hover:bg-chart-2/20 hover:text-chart-2 text-gray-600 duration-500 hover:-translate-y-1">
                    <Target className="img-small text-chart-2/80" />
                    <span className="tracking-wide ">
                      {item.equipment == "body_only"
                        ? "Bodyweight"
                        : item.equipment == "e-z_curl_bar"
                        ? "Ez curl bar"
                        : item.equipment}
                    </span>
                  </div>
                </div>
                {/* Target muscle */}
                <div className="flex flex-col px-4 gap-3 text-sm self-start">
                  <div className="flex items-center gap-2 font-redhat font-bold">
                    <Sparkles className="img-small text-chart-5" />
                    <h1>Target Muscles:</h1>
                  </div>
                  <div className="px-1.5 text-xs mx-3 w-fit py-0.5 border-1 hover:border-chart-1/40 hover:scale-105 duration-300 select-none border-border rounded-lg">
                    <span className="font-redhat tracking-wider capitalize">
                      {item.muscle}
                    </span>
                  </div>
                </div>
                {/* CONTROL BUTTON (ADD TO WORKOUT, view details) */}
              </div>
            ))}
      </div>
      {error && <div className="text-red-500 font-bold px-6 py-2">{error}</div>}
    </div>
  );
};

export default FeaturedExercises;
