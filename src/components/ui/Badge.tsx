// USER PROFILE BADGE
import React, { useState, useEffect } from "react";
// import clsx from "clsx";
import DummyUser, { type User } from "../../storage/Users";

const badgeStyles = {
  free: "border-transparent bg-primary text-primary-foreground hover:bg-primary/90",
  premium:
    "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/90",
};

const Badge = ({ name, premium = false }: User) => {
  const [isPremium, setIsPremium] = useState(false);

  useEffect(() => setIsPremium(premium), []);
  // const style = badgeStyles[variant];
  return (
    // <div className={clsx("inline-flex items-center gap-2 px-4 py-1 rounded-md text-sm font-medium", style)}>
    <div
      className={`inline-flex items-center gap-2 px-4 py-1 rounded-md text-sm font-medium ${
        isPremium ? badgeStyles.premium : badgeStyles.free
      }`}
    >
      <span>{name}</span>
      {premium && <span className="text-yellow-400">★</span>}
    </div>
  );
};

export default Badge;
