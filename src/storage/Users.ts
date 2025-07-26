export interface User {
  name: string;
  premium?: boolean;
}

export const DummyUser: User = {
  name: "Johny2115",
  premium: true,
};

export default DummyUser;
