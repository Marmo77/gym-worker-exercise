import React, { useEffect, useState } from "react";
import type { User, UserInfo, UserInfoBadge } from "../../storage/Users";

const badgeStyles = {
  user: "bg-primary text-white hover:bg-primary/90",
  premium: "bg-yellow-400 text-black hover:bg-yellow-400/80",
  admin: "bg-red-600 text-white hover:bg-red-700",
};

const Badge = ({ username, status = "user" }: UserInfoBadge) => {
  const [role, setRole] = useState<"user" | "premium" | "admin">("user");

  useEffect(() => {
    if (status == "admin") setRole("admin");
    else if (status == "premium") setRole("premium");
    else setRole("user");
  }, [status]);

  return (
    <div
      className={`inline-flex click-pressed items-center gap-2 px-4 py-1 rounded-md text-sm font-medium transition-all duration-200 ${badgeStyles[role]}`}
    >
      <span className="text-text">{username}</span>
      {role === "premium" && <span className="text-white">★</span>}
      {role === "admin" && <span className="text-white font-bold">👑</span>}
    </div>
  );
};

export default Badge;
