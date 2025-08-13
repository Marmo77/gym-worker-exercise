import React, { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";

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

const initialExercises: ExercisesProps[] = [
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
  const [exercises, setExercises] =
    useState<ExercisesProps[]>(initialExercises);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newExercise, setNewExercise] = useState<Omit<ExercisesProps, "id">>({
    name: "",
    muscle: "",
    target: "",
    sets: 0,
    reps: 0,
    weight: undefined,
  });

  const handleInputChange = (
    field: keyof Omit<ExercisesProps, "id">,
    value: string | number | undefined
  ) => {
    setNewExercise((prev) => ({
      ...prev,
      [field]:
        field === "sets" || field === "reps"
          ? Number(value)
          : field === "weight"
          ? value === ""
            ? undefined
            : Number(value)
          : value,
    }));
  };

  const handleAddExercise = () => {
    if (
      newExercise.name &&
      newExercise.muscle &&
      newExercise.target &&
      newExercise.sets > 0 &&
      newExercise.reps > 0
    ) {
      const exerciseToAdd: ExercisesProps = {
        ...newExercise,
        id:
          exercises.length > 0
            ? Math.max(...exercises.map((e) => e.id)) + 1
            : 0,
      };

      setExercises((prev) => [...prev, exerciseToAdd]);
      setNewExercise({
        name: "",
        muscle: "",
        target: "",
        sets: 0,
        reps: 0,
        weight: undefined,
      });
      setIsDialogOpen(false);
    }
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setNewExercise({
      name: "",
      muscle: "",
      target: "",
      sets: 0,
      reps: 0,
      weight: undefined,
    });
  };

  return (
    <div className="flex flex-wrap flex-col gap-5 max-w-7xl">
      <div className="flex justify-between items-center px-4">
        <h1 className="font-semibold text-2xl text-accent-foreground font-poppins">
          Number of Exercises: {exercises.length}
        </h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add Exercise
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Exercise</DialogTitle>
              <DialogDescription>
                Fill in the details for your new exercise. Click save when
                you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={newExercise.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="col-span-3"
                  placeholder="Exercise name"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="muscle" className="text-right">
                  Muscle
                </Label>
                <Input
                  id="muscle"
                  value={newExercise.muscle}
                  onChange={(e) => handleInputChange("muscle", e.target.value)}
                  className="col-span-3"
                  placeholder="Target muscle group"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="target" className="text-right">
                  Target
                </Label>
                <Input
                  id="target"
                  value={newExercise.target}
                  onChange={(e) => handleInputChange("target", e.target.value)}
                  className="col-span-3"
                  placeholder="Strength, Cardio, etc."
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="sets" className="text-right">
                  Sets
                </Label>
                <Input
                  id="sets"
                  type="number"
                  value={newExercise.sets}
                  onChange={(e) => handleInputChange("sets", e.target.value)}
                  className="col-span-3"
                  placeholder="Number of sets"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="reps" className="text-right">
                  Reps
                </Label>
                <Input
                  id="reps"
                  type="number"
                  value={newExercise.reps}
                  onChange={(e) => handleInputChange("reps", e.target.value)}
                  className="col-span-3"
                  placeholder="Number of reps"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="weight" className="text-right">
                  Weight (kg)
                </Label>
                <Input
                  id="weight"
                  type="number"
                  value={newExercise.weight || ""}
                  onChange={(e) => handleInputChange("weight", e.target.value)}
                  className="col-span-3"
                  placeholder="Weight in kg (optional)"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={handleCloseDialog}>
                Cancel
              </Button>
              <Button onClick={handleAddExercise}>Add Exercise</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="space-y-4">
        <div className="space-y-6">
          {exercises.map((item) => (
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
        <div className="flex justify-center">
          <button
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 py-2 rounded-full px-2 hover:to-purple-500 transition-colors click-pressed duration-300 hover:scale-105 text-white"
            onClick={() => setIsDialogOpen(true)}
          >
            <Plus className="img-big text-accent-foreground"></Plus>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseList;
