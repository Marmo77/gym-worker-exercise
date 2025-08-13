import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ExerciseProps {
  ExerciseNumber: number;
}

interface ExercisesProps {
  id: number;
  name: string;
  muscle: string;
  target: string;
  sets: number;
  reps: number;
  weight?: number;
}

const Exercises: ExercisesProps[] = [
  {
    id: 0,
    name: "Pull-ups",
    muscle: "Back",
    target: "Strength",
    sets: 3,
    reps: 12,
  },
  {
    id: 1,
    name: "Push-ups",
    muscle: "Chest",
    target: "Strength",
    sets: 4,
    reps: 20,
  },
  {
    id: 2,
    name: "Dumbbell Squats",
    muscle: "Quadriceps",
    target: "Strength",
    sets: 3,
    reps: 10,
    weight: 30,
  },
  {
    id: 3,
    name: "Burpiess",
    muscle: "Whole Body",
    target: "Dynamic",
    sets: 3,
    reps: 15,
  },
];
const ExerciseList = ({ ExerciseNumber }: ExerciseProps) => {
  return (
    <div className="flex flex-wrap flex-col gap-5 max-w-7xl">
      <h1 className="font-semibold text-2xl text-accent-foreground font-poppins px-4">
        Number of Exercises: {ExerciseNumber}
      </h1>
      <div className="space-y-4">
        <div className="space-y-6">
          {Exercises.map((item) => (
            <Card
              className="bg-white/60 backdrop-blur-sm hover:shadow-accent-foreground/20  shadow-xl duration-200 font-poppins"
              key={item.id}
            >
              <CardHeader>
                <CardTitle className="">{item.name}</CardTitle>
                <CardDescription>
                  {item.target} • {item.muscle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex gap-4 text-sm text-gray-600">
                    Target:
                    <div className="space-x-4 text-gray-800">
                      <span>{item.sets} sets</span>
                      <span>{item.reps} reps</span>
                      <span>
                        {item.weight ? `${item.weight} kg` : "Body Weight"}
                      </span>
                    </div>
                  </div>
                  {/* SETS */}
                  <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3">
                    <div className="flex flex-col mb-2 p-4 border rounded-lg transition-all">
                      <h1 className="font-medium mb-3">Set: 1</h1>
                      <div className="flex flex-col gap-1 text-sm font-light">
                        <h3>
                          Reps: <span className="font-medium">12</span>
                        </h3>
                        <h3>
                          Weight: <span className="font-medium">60 kg</span>
                        </h3>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2 p-4 border rounded-lg transition-all">
                      <h1 className="font-medium">Set: 2</h1>
                    </div>
                    <div className="flex items-center justify-between mb-2 p-4 border rounded-lg transition-all">
                      <h1 className="font-medium">Set: 3</h1>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div>JD</div>
      </div>
    </div>
  );
};

export default ExerciseList;
