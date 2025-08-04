import { BarChart3, Dumbbell, Play, Plus } from "lucide-react";

const AddTrainingPlan = () => {
  return (
    <section
      className="bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 border-0 shadow-2xl cursor-pointer transition-all duration-300 hover:shadow-3xl rounded-4xl max-w-5xl w-6xl px-12 mx-auto hover:scale-105 hover:-translate-y-4 mt-6"
      // onClick={navigateToTrainingPlan}
    >
      <div className="relative z-10 text-center py-8 space-y-4">
        <div className="flex items-center justify-center">
          <div className="px-5 py-5 border-2 border-accent-foreground/20 bg-background/12 rounded-full hover:scale-110 hover:rotate-180 duration-600 transition-transform">
            <Dumbbell className="img-big text-white drop-shadow-lg" />
          </div>
        </div>
        <div className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
          My Training Plan
        </div>
        <div className="text-white/90 text-lg mb-6 drop-shadow-sm">
          Create, manage and track your personalized workout routines
        </div>

        <div className="flex items-center justify-center gap-3 mb-6 group">
          <div className="flex items-center gap-2 text-white/90 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 group-hover:-translate-x-2 group-hover:-translate-y-2 duration-300 delay-150">
            <Plus className="h-4 w-4" />
            <span>Add Exercises</span>
          </div>
          <div className="flex items-center gap-2 text-white/90 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 group-hover:group-hover:-translate-y-2 duration-300">
            <Play className="h-4 w-4" />
            <span>Start Workouts</span>
          </div>
          <div className="flex items-center gap-2 text-white/90 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 group-hover:translate-x-2 group-hover:-translate-y-2 duration-300 delay-150">
            <BarChart3 className="h-4 w-4" />
            <span>Track Progress</span>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a href="user/training-plan">
            <button className="bg-white text-blue-600 hover:bg-white/90 font-bold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0 flex justify-center items-center gap-3 hover:-translate-y-1.5 click-pressed">
              <Dumbbell className="h-5 w-5 mr-2" />
              Open Training Plan
              <div className="ml-2">→</div>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AddTrainingPlan;
