import { get } from "http";
import { Dot } from "lucide-react";
import React from "react";

const FeaturedExercises = () => {
  const exercise = [
    {
      name: "Pushups",
      type: "strength",
      muscle: "chest",
      equipment: "body_only",
      difficulty: "beginner",
      instructions:
        "Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Next, lower yourself downward until your chest almost touches the floor as you inhale. Now breathe out and press your upper body back up to the starting position while squeezing your chest. After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.  Variations: If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance and to target the upper chest more.",
    },
    {
      name: "Dumbbell Bench Press",
      type: "strength",
      muscle: "chest",
      equipment: "dumbbell",
      difficulty: "intermediate",
      instructions:
        "Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other. Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position. Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions of your training program.  Caution: When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs. When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs). By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs. At this moment you can place the dumbbells on the floor. Variations: Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders.",
    },
    {
      name: "Low-cable cross-over",
      type: "strength",
      muscle: "chest",
      equipment: "cable",
      difficulty: "expert",
      instructions:
        "To move into the starting position, place the pulleys at the low position, select the resistance to be used and grasp a handle in each hand. Step forward, gaining tension in the pulleys. Your palms should be facing forward, hands below the waist, and your arms straight. This will be your starting position. With a slight bend in your arms, draw your hands upward and toward the midline of your body. Your hands should come together in front of your chest, palms facing up. Return your arms back to the starting position after a brief pause.",
    },
  ];
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

  // Remove this line, and use getDifficulty inside the map below if needed

  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-accent-foreground text-2xl font-dmsans font-semibold">
        Featured Exercises
      </h1>
      <div className="grid grid-cols-3 gap-6 px-6">
        {/* <div className="featured_exercises">
          <div className="flex justify-between px-6">
            <div className="flex flex-col gap-1">
              <div className="">{exercise[0].name}</div>
              <div>{exercise[0].type}</div>
            </div>
            <div>{exercise[0].difficulty}</div>
          </div>
        </div> */}
        {/* <div className="featured_exercises">2</div>
        <div className="featured_exercises">3</div> */}
        {exercise.map((item, index) => (
          <div key={index} className="featured_exercises group">
            <div className="flex justify-between px-4">
              <div className="flex flex-col gap-1">
                <div
                  className={`text-lg font-semibold font-dmsans group-hover:scale-110 duration-700 delay-200 group-hover:text-chart-1 `}
                >
                  {item.name}
                </div>
                <div className="text-xs font-montserrat text-muted-foreground font-medium px-1">
                  {item.type}
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
                      const isActive = i < getDifficulty(item.difficulty).dots;
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
                  {/* {Array.from({
                    length: getDifficulty(item.difficulty).dots,
                  }).map((_, i) => (
                    <Dot key={i} className={`img-small text-admin`} />
                  ))} */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedExercises;
