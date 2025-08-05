import { Plus } from "lucide-react";
import React, { useState } from "react";
import ExerciseList from "./ui/TrainingPage/ExerciseList";

const TrainingBuilder = () => {
  const [isExercise, setIsExercise] = useState<boolean>(false);

  return (
    <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mt-12">
      <div className="flex flex-col gap-24">
        {/* HEADER OF TRAINING */}
        <div className="flex max-md:flex-col gap-6 md:gap-12 justify-between">
          <div className="flex max-md:items-center flex-col gap-1">
            <h1 className="font-poppins font-semibold text-4xl">
              My Training Plan
            </h1>
            <span className="px-2 text-lg font-poppins font-light max-md:text-center">
              Manage your exercises and track your progress
            </span>
          </div>
          <button className="self-center md:px-4 px-7 py-3 md:py-2 rounded-4xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center gap-3 click-pressed hover:scale-105 duration-200">
            <Plus className="img-small" />
            <span className="text-background max-md:text-lg font-poppins">
              Add Exercise
            </span>
          </button>
        </div>
        <div>
          {isExercise ? (
            <ExerciseList />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-4">
                <Plus className="img-big text-blue-600" />
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-3">
                <h1 className="font-bold text-2xl">No Exercises Yet</h1>
                <span className="text-muted-foreground">
                  Add exercises to your training plan to get started
                </span>
                <button className="flex gap-4 px-4 py-2 bg-accent-foreground rounded-lg items-center text-background font-semibold click-pressed hover:bg-accent-foreground/90">
                  <Plus className="img-small" />
                  Add Your First Exercise
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainingBuilder;
