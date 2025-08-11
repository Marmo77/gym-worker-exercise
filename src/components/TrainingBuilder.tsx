import { Plus, Trash2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import ExerciseList from "./ui/TrainingPage/ExerciseList";

const TrainingBuilder = () => {
  // const [isExercise, setIsExercise] = useState<boolean>(true);
  // pushing to local how many exercise and width of the exercise with weight are pushed into Training Builder

  const [ExerciseNumber, setExerciseNumber] = useState<number>(
    Number(localStorage.getItem("Exercise_number")) || 0
  );

  const handleCreate = () => {
    const newNumber = ExerciseNumber + 1;
    setExerciseNumber(newNumber);
    localStorage.setItem("Exercise_number", String(newNumber));
    // setIsExercise(!isExercise);
  };

  const handleDeleteExercises = () => {
    localStorage.setItem("Exercise_number", "0");
    setExerciseNumber(0);
    // setIsExercise(false);
  };
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
          <div className="flex gap-3">
            <button className="self-center md:px-4 px-7 py-3 md:py-2 rounded-4xl bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center gap-3 click-pressed hover:scale-105 duration-200">
              <Plus className="img-small" />
              <span className="text-background max-md:text-lg font-poppins">
                Add Exercise
              </span>
            </button>
            <button
              className="bg-admin px-3 py-3 flex items-center rounded-2xl self-center group hover:scale-105 duration-500 click-pressed"
              onClick={handleDeleteExercises}
            >
              <Trash2 className="img-small text-accent-foreground group-hover:animate-pulse group-hover:-rotate-45 group-hover:scale-125 duration-500 ease-in-out" />
            </button>
          </div>
        </div>
        <div>
          {/* {ExerciseNumber > 0 ? (
            isExercise ? (
              <ExerciseList ExerciseNumber={ExerciseNumber} />
            ) : (
              "bel"
            )
          ) : ( */}
          {ExerciseNumber > 0 ? (
            <ExerciseList ExerciseNumber={ExerciseNumber} />
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
                <button
                  className="flex gap-4 px-4 py-2 bg-accent-foreground rounded-lg items-center text-background font-semibold click-pressed hover:bg-accent-foreground/90"
                  onClick={handleCreate}
                >
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
