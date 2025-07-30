export interface User {
  name: string;
  status: "user" | "premium" | "admin";
}

export interface UserInfo {
  name: User["name"];
  status?: "user" | User["status"];
  email?: string;
  exercise_completed?: number;
  localization?: string;
  friends?: string[];
  days_on_app?: number;
  data_of_join?: Date | string;
}

function createUser(user: UserInfo): UserInfo {
  return {
    status: "user",
    ...user,
  };
}

const DummyUser = createUser({
  name: "Henry211",
  status: "premium",
  email: "johny2115@gmail.com",
  exercise_completed: 41,
  friends: ["john_tomato22", "petrchecz"],
  days_on_app: 30,
  data_of_join: "2023-05-19",
  localization: "Germany",
});
// const DummyUser = createUser({
//   name: "SebaMafia96",
//   status: "admin",
//   email: "sebamiłek@gmail.com",
//   exercise_completed: 99,
//   friends: ["john_tomato22", "petrchecz", "mariusz_pudzianator"],
//   days_on_app: 30,
//   data_of_join: "2009-08-23",
//   localization: "Poland",
// });

export default DummyUser;
