export interface User {
  name: string;
  status: "user" | "premium" | "admin";
}

export interface UserInfo {
  name: User["name"];
  status?: "user" | User["status"];
  email?: string;
  exercise_completed?: number;
  friends?: string[];
  days_on_app?: number;
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
});

export default DummyUser;
