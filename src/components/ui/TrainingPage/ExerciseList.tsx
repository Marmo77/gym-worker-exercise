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

const ExerciseList = ({ ExerciseNumber }: ExerciseProps) => {
  return (
    <div className="flex flex-wrap flex-col gap-5 max-w-7xl">
      <h1 className="font-semibold text-2xl text-accent-foreground font-poppins px-4">
        Number of Exercises: {ExerciseNumber}
      </h1>
      <div>
        <div className="">
          <Card className="bg-white/60 backdrop-blur-sm  shadow-xl font-poppins">
            <CardHeader>
              <CardTitle className="">Pull-ups</CardTitle>
              <CardDescription>Strength • Back</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex gap-4 text-sm text-gray-600">
                  Target:
                  <div className="space-x-4 text-gray-800">
                    <span>3 sets</span>
                    <span>24 reps</span>
                    <span>78 kg</span>
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
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
