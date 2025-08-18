import {
  UserPlus,
  Trophy,
  Calendar,
  Activity,
  Users,
  Award,
  Clock,
  Plus,
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { getUserFromStorage, Friends, USER_PROFILES } from "@/storage/Users";
import { format } from "date-fns";
import AddFriend from "@/components/AddFriend";

interface UserActivitiesProps {
  defaultTab?: "friends" | "achievements" | "history";
}

const UserActivities = ({ defaultTab = "friends" }: UserActivitiesProps) => {
  const currentUser = getUserFromStorage();
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const activitiesRef = useRef<HTMLDivElement>(null);
  const [openAddFriendDialog, setOpenAddFriendDialog] = useState(false);

  // Scroll to UserActivities when component mounts with a specific tab
  useEffect(() => {
    if (defaultTab !== "friends" && activitiesRef.current) {
      setTimeout(() => {
        activitiesRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100); // Small delay to ensure component is fully rendered
    }
  }, [defaultTab]);

  // Get current date for realistic workout dates
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  // Get current user's friends
  const userFriends = currentUser?.friends || [];
  const friendsData = Friends.filter((friend) =>
    userFriends.includes(friend.username)
  );

  // Mock recent activities for friends with more random users
  const recentActivities = [
    {
      id: 1,
      username: "john_tomato22",
      name: "John Tomato",
      activity: "Completed Chest Workout",
      time: "2 hours ago",
      type: "workout",
    },
    {
      id: 2,
      username: "alice_spark",
      name: "Alice Sparkle",
      activity: "Achieved 'Muscle Memory' goal",
      time: "4 hours ago",
      type: "achievement",
    },
    {
      id: 3,
      username: "Gibi2010PL",
      name: "Gibi The Great",
      activity: "Started Leg Day routine",
      time: "6 hours ago",
      type: "workout",
    },
    {
      id: 4,
      username: "TheodorDuck",
      name: "Theo Duckling",
      activity: "Completed 15th workout this month",
      time: "1 day ago",
      type: "milestone",
    },
    {
      id: 5,
      username: "petrchecz",
      name: "Peter Checz",
      activity: "Set new personal record in Deadlift",
      time: "3 hours ago",
      type: "achievement",
    },
    {
      id: 6,
      username: "john_tomato22",
      name: "John Tomato",
      activity: "Started Cardio Session",
      time: "8 hours ago",
      type: "workout",
    },
    {
      id: 7,
      username: "alice_spark",
      name: "Alice Sparkle",
      activity: "Completed Yoga Flow",
      time: "12 hours ago",
      type: "workout",
    },
    {
      id: 8,
      username: "Gibi2010PL",
      name: "Gibi The Great",
      activity: "Reached 30-day streak milestone",
      time: "1 day ago",
      type: "milestone",
    },
  ];

  // Generate realistic workout dates for current month with random pattern
  const generateWorkoutDates = (): Date[] => {
    const dates: Date[] = [];
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Create a more random workout pattern - not just every 3-4 days
    // This simulates real life where people might workout Monday, Thursday, then Sunday, then Wednesday, etc.
    const randomWorkoutDays = [2, 5, 9, 12, 16, 19, 23, 26, 29];

    // Filter out days that exceed the current month's days
    randomWorkoutDays.forEach((day) => {
      if (day <= daysInMonth) {
        dates.push(new Date(currentYear, currentMonth, day));
      }
    });

    return dates;
  };

  const exerciseDates = generateWorkoutDates();

  // Mock achievements (mix of achieved and not achieved)
  const allAchievements = [
    {
      id: 1,
      name: "First Workout",
      description: "Complete your first workout",
      achieved: true,
      icon: "🏋️",
    },
    {
      id: 2,
      name: "Muscle Memory",
      description: "Work out 3 days in a row",
      achieved: true,
      icon: "💪",
    },
    {
      id: 3,
      name: "Complete 20 workouts",
      description: "Complete 20 total workouts",
      achieved: false,
      icon: "🎯",
    },
    {
      id: 4,
      name: "Stay shaped",
      description: "Maintain 30-day streak",
      achieved: false,
      icon: "🔥",
    },
    {
      id: 5,
      name: "Add your Friend",
      description: "Add your first friend",
      achieved: true,
      icon: "👥",
    },
    {
      id: 6,
      name: "Weight Master",
      description: "Lift 100kg in any exercise",
      achieved: true,
      icon: "🏆",
    },
    {
      id: 7,
      name: "Cardio King",
      description: "Complete 10 cardio sessions",
      achieved: false,
      icon: "❤️",
    },
    {
      id: 8,
      name: "Consistency Pro",
      description: "Work out 5 days in a week",
      achieved: false,
      icon: "⭐",
    },
  ];

  return (
    <div
      ref={activitiesRef}
      className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto py-6"
    >
      <Tabs defaultValue={defaultTab} className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-white border border-gray-200 rounded-xl p-1 h-auto">
          <TabsTrigger
            value="friends"
            className="flex flex-col items-center gap-2 px-6 py-4 rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
          >
            <div className="p-2 bg-gray-100 rounded-lg data-[state=active]:bg-white/20">
              <Users className="w-5 h-5 text-gray-600 data-[state=active]:text-white" />
            </div>
            <div className="text-center">
              <div className="font-bold text-sm">Friends</div>
              <div className="text-xs opacity-80">Social activity</div>
            </div>
          </TabsTrigger>

          <TabsTrigger
            value="achievements"
            className="flex flex-col items-center gap-2 px-6 py-4 rounded-lg data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
          >
            <div className="p-2 bg-gray-100 rounded-lg data-[state=active]:bg-white/20">
              <Trophy className="w-5 h-5 text-gray-600 data-[state=active]:text-white" />
            </div>
            <div className="text-center">
              <div className="font-bold text-sm">Achievements</div>
              <div className="text-xs opacity-80">Unlocked badges</div>
            </div>
          </TabsTrigger>

          <TabsTrigger
            value="history"
            className="flex flex-col items-center gap-2 px-6 py-4 rounded-lg data-[state=active]:bg-purple-500 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-300"
          >
            <div className="p-2 bg-gray-100 rounded-lg data-[state=active]:bg-white/20">
              <Calendar className="w-5 h-5 text-gray-600 data-[state=active]:text-white" />
            </div>
            <div className="text-center">
              <div className="font-bold text-sm">Recent Exercise</div>
              <div className="text-xs opacity-80">Workout history</div>
            </div>
          </TabsTrigger>
        </TabsList>

        {/* Friends Tab - Blue Theme */}
        <TabsContent value="friends" className="mt-6">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="flex">
              {/* Friends List - 1/3 width */}
              <div className="w-1/3 border-r border-gray-200 bg-blue-50">
                <div className="p-4 bg-blue-500 text-white flex justify-between items-center">
                  <h3 className="text-lg font-semibold">
                    Friends ({friendsData.length})
                  </h3>
                  <div
                    className="bg-blue-300 flex items-center gap-2 px-3 py-1 rounded-2xl text-sm font-medium click-pressed cursor-pointer hover:bg-blue-400 transition-colors"
                    onClick={() => setOpenAddFriendDialog(true)}
                  >
                    <Plus className="w-4 h-4" /> Add Friend
                  </div>
                </div>
                <div className="p-4 space-y-3">
                  {friendsData.map((friend) => (
                    <div
                      key={friend.id}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm ${
                          friend.status === "premium"
                            ? "bg-orange-500"
                            : friend.status === "admin"
                            ? "bg-red-500"
                            : "bg-blue-500"
                        }`}
                      >
                        {friend.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm truncate">
                          {friend.name}
                        </div>
                        <div className="text-xs text-gray-500 truncate">
                          @{friend.username}
                        </div>
                        <div
                          className={`text-xs px-2 py-1 rounded-full inline-block mt-1 ${
                            friend.status === "premium"
                              ? "bg-orange-100 text-orange-700"
                              : friend.status === "admin"
                              ? "bg-red-100 text-red-700"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {friend.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activities - 2/3 width */}
              <div className="w-2/3">
                <div className="p-4 bg-blue-500 text-white">
                  <h3 className="text-lg font-semibold">Recent Activities</h3>
                </div>
                <div className="p-4 space-y-4">
                  {recentActivities.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {activity.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-medium text-sm">
                            {activity.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            @{activity.username}
                          </span>
                        </div>
                        <div className="text-sm text-gray-700 mb-1">
                          {activity.activity}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          {activity.time}
                        </div>
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs ${
                          activity.type === "workout"
                            ? "bg-green-100 text-green-700"
                            : activity.type === "achievement"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-blue-100 text-blue-700"
                        }`}
                      >
                        {activity.type}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Achievements Tab - Orange Theme */}
        <TabsContent value="achievements" className="mt-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Trophy className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Achievements</h3>
                <p className="text-sm text-gray-500">
                  Track your fitness milestones
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {allAchievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className={`text-center p-4 rounded-lg border transition-all duration-300 ${
                    achievement.achieved
                      ? "bg-orange-50 border-orange-200 shadow-sm"
                      : "bg-gray-50 border-gray-200 opacity-60"
                  }`}
                >
                  <div
                    className={`text-3xl mb-3 ${
                      achievement.achieved ? "" : "grayscale"
                    }`}
                  >
                    {achievement.icon}
                  </div>
                  <div
                    className={`text-sm font-medium mb-1 ${
                      achievement.achieved ? "text-orange-700" : "text-gray-500"
                    }`}
                  >
                    {achievement.name}
                  </div>
                  <div
                    className={`text-xs ${
                      achievement.achieved ? "text-orange-600" : "text-gray-400"
                    }`}
                  >
                    {achievement.description}
                  </div>
                  <div
                    className={`mt-2 text-xs px-2 py-1 rounded-full inline-block ${
                      achievement.achieved
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {achievement.achieved ? "Completed" : "Locked"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>

        {/* Recent Exercise/History Tab - Purple Theme */}
        <TabsContent value="history" className="mt-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Activity className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Exercise History</h3>
                <p className="text-sm text-gray-500">
                  Track your workout schedule
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Calendar */}
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-700 mb-4">
                  Workout Calendar
                </h4>
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border bg-white"
                  modifiers={{
                    workout: exerciseDates,
                  }}
                  modifiersStyles={{
                    workout: { backgroundColor: "#10b981", color: "white" },
                  }}
                  showOutsideDays={true}
                />
                <div className="mt-4 flex items-center gap-2 text-sm text-purple-600">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Workout completed</span>
                </div>
              </div>

              {/* Recent Workouts */}
              <div className="bg-purple-50 rounded-lg p-4">
                <h4 className="font-medium text-purple-700 mb-4">
                  Recent Workouts
                </h4>
                <div className="space-y-3">
                  {exerciseDates
                    .slice(-5)
                    .reverse()
                    .map((date, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                            <Activity className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-medium text-sm">
                              Workout #{exerciseDates.length - index}
                            </div>
                            <div className="text-xs text-gray-500">
                              {format(date, "MMM dd, yyyy")}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-green-600 font-medium">
                          Completed
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* AddFriend Dialog */}
      <AddFriend
        open={openAddFriendDialog}
        onClose={() => setOpenAddFriendDialog(false)}
        setOpen={setOpenAddFriendDialog}
      />
    </div>
  );
};

export default UserActivities;
