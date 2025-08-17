export interface User {
  username: string;
  status: "user" | "premium" | "admin";
}

export interface UserInfo {
  username: User["username"];
  name: string;
  status?: "user" | User["status"];
  email: string | "email@gmail.com";
  exercise_completed: number;
  localization: string;
  goals: string[];
  friends: string[];
  total_workouts: number;
  days_on_app: number;
  data_of_join?: Date | string;
  current_streak: number;
  best_streak: number;
}

export interface UserInfoBadge {
  username: User["username"];
  status: User["status"];
}

// User profiles
export const USER_PROFILES = {
  admin: {
    username: "BestAdmin1337",
    name: "Marius Chadsky",
    status: "admin" as const,
    email: "admin@gymapp.com",
    exercise_completed: 95,
    total_workouts: 21,
    goals: [
      "Manage Users",
      "Monitor System",
      "Update Content",
      "Analytics Review",
      "System Maintenance",
    ],
    friends: ["john_tomato22", "petrchecz", "mariusz_pudzianator"],
    days_on_app: 365,
    data_of_join: "2023-01-01",
    localization: "Poland",
    current_streak: 30,
    best_streak: 45,
  },
  // IF you are reading it, yes i know profile pictures are created at UserPanel.tsx and there are only 2 of them, but its only showcasing, so be kind with it :D
  user: {
    username: "JohnyLamborghini97",
    name: "Johny Ferrari",
    status: "user" as const,
    email: "user@gymapp.com",
    exercise_completed: 41,
    total_workouts: 8,
    goals: [
      "First workout",
      "Muscle Memory",
      "Complete 20 workouts",
      "Stay shaped",
      "Add your Friend",
    ],
    friends: ["john_tomato22", "petrchecz"],
    days_on_app: 30,
    data_of_join: "2023-05-19",
    localization: "Germany",
    current_streak: 5,
    best_streak: 12,
  },
};

export const AdminList = ["BestAdmin1337", "Admin21"];
// yes i know its hardcoded, and you can change it into a localstorage, but its for demnostatration and it prevent you only from seeing AdminPanel.tsx, so it works (partialy).

// Local storage management
export const USER_STORAGE_KEY = "currentUser";
export const USER_STATUS_KEY = "UserStatus";

export const saveUserToStorage = (user: UserInfo) => {
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
  localStorage.setItem(USER_STATUS_KEY, user.status || "user");
};

export const getUserFromStorage = (): UserInfo | null => {
  const userData = localStorage.getItem(USER_STORAGE_KEY);
  return userData ? JSON.parse(userData) : null;
};

export const clearUserFromStorage = () => {
  localStorage.removeItem(USER_STORAGE_KEY);
  localStorage.removeItem(USER_STATUS_KEY);
};

export const isUserLoggedIn = (): boolean => {
  return localStorage.getItem(USER_STORAGE_KEY) !== null;
};

export const getCurrentUserStatus = (): string | null => {
  return localStorage.getItem(USER_STATUS_KEY) || null;
};

// Login function
export const loginUser = (userType: "admin" | "user"): UserInfo => {
  const userProfile = USER_PROFILES[userType];
  saveUserToStorage(userProfile);
  return userProfile;
};

// Logout function
export const logoutUser = () => {
  clearUserFromStorage();
};

// function createUser(user: UserInfo): UserInfo {
//   return {
//     status: "user",
//     ...user,
//   };

// const DummyUser = createUser({
//   username: "Admin123",
//   name: "SuperAdmin",
//   status: "admin",
//   email: "johndeer@gmail.com",
//   exercise_completed: 95,
//   total_workouts: 21,
//   goals: [
//     "First workout",
//     "Muscle Memory",
//     "Complete 20 workouts",
//     "Stay shaped",
//     "Add your Friend",
//   ],
//   friends: ["john_tomato22", "petrchecz", "mariusz_pudzianator"],
//   days_on_app: 30,
//   data_of_join: "2009-08-23",
//   localization: "Poland",
//   current_streak: 5,
//   best_streak: 12,
// });
