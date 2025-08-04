import React, { use } from "react";
// import DummyUser, { type User } from "../../../storage/Users";
import { Mail, CalendarFold, MapPin } from "lucide-react";

interface UserProfileCardProps {
  username: string;
  name: string;
  status: string;
  avatarUrl: string;
  email?: string;
  stats?: { label: string; value: string | number }[];
  localization?: string;
  data_of_join?: Date | string;
  onFollow: () => void;
  onMessage: () => void;
  onEdit: () => void;
}
// ...existing code...
const UserProfileCard: React.FC<UserProfileCardProps> = ({
  username,
  name,
  status,
  avatarUrl,
  localization,
  data_of_join,
  email,
  stats,
  onFollow,
  onMessage,
  onEdit,
}) => {
  return (
    <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <div className="w-full mt-12 rounded-2xl pb-10 profile-card">
        {/* Gradient Header */}
        <div
          className="hidden md:flex w-full rounded-t-2xl h-24 bg-gradient-to-r from-chart-1 to-admin"
          style={{ clipPath: "ellipse(150% 100% at 50% 0%)" }}
        />
        <div className="flex md:justify-start justify-center w-full mt-10 md:-mt-14">
          <div className="z-50 flex md:flex-row flex-col md:items-start items-center gap-3 md:ml-15">
            <img
              src={avatarUrl}
              alt={`${name} pfp`}
              className="w-24 h-24 border-4 border-accent shadow-lg bg-accent rounded-full object-cover"
            />
            <div className="flex flex-col md:items-start items-center gap-1">
              <h2
                className={`text-2xl flex gap-2 items-center font-poppins font-bold ${
                  status === "admin"
                    ? "text-admin"
                    : status === "premium"
                    ? "text-premium"
                    : "text-foreground"
                }`}
              >
                {name}{" "}
                <span className="text-muted hidden md:block font-dmsans font-light text-xs">
                  @{username}
                </span>
              </h2>
              <span className="text-accent-foreground  md:hidden block font-dmsans font-semibold text-xs">
                @{username}
              </span>
              <p
                className={`capitalize  ml-2 ${
                  status === "admin"
                    ? "before:content-['👑'] text-admin"
                    : status === "premium"
                    ? "before:content-['✨'] text-premium"
                    : "before:content-['👤'] text-foreground"
                }`}
              >
                {status}
              </p>
              <div className="flex md:flex-row sm:flex-row flex-col max-sm:items-center py-1 px-4 gap-6">
                {email && (
                  <a
                    className="text-muted-foreground flex gap-1 items-center click-pressed"
                    href="/user"
                  >
                    <Mail className="img-small text-muted-foreground" />
                    <span className="text-xs">{email}</span>
                  </a>
                )}
                {data_of_join && (
                  <a
                    className="text-muted-foreground flex gap-1 items-center click-pressed"
                    href="/user"
                  >
                    <CalendarFold className="img-small text-muted-foreground" />
                    <span className="text-xs">
                      {typeof data_of_join === "string"
                        ? data_of_join
                        : data_of_join?.toLocaleDateString()}
                    </span>
                  </a>
                )}
                {localization && (
                  <a
                    className="text-muted-foreground flex gap-1 items-center click-pressed"
                    href="/user"
                  >
                    <MapPin className="img-small text-muted-foreground" />
                    <span className="text-xs">{localization}</span>
                  </a>
                )}
              </div>
              <div className="flex px-6 py-1">
                <button
                  className="px-3 py-1 bg-premium text-accent font-poppins rounded-xl click-pressed hover:bg-premium-hover"
                  onClick={onEdit}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
{
  /* Stats
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-3 gap-4 text-center px-12 py-4 text-[var(--color-muted-foreground)] font-dmsans select-none">
            {stats.map(({ label, value }) => (
              <div key={label} className="flex flex-col">
                <span className="text-lg font-bold text-[var(--color-primary)]">
                  {value}
                </span>
                <span className="text-xs">{label}</span>
              </div>
            ))}
          </div>
        )}
        Action Buttons
        <div className="quick-action grid grid-cols-2 gap-6 p-6 px-12">
          <button
            onClick={onFollow}
            className="rounded-2xl bg-[var(--color-admin)] text-white py-2 text-sm font-semibold hover:bg-[var(--color-admin-hover)] transition-colors duration-300 click-pressed"
            aria-label="Follow user"
          >
            Follow
          </button>
          <button
            onClick={onMessage}
            className="rounded-2xl border border-[var(--color-admin)] text-[var(--color-admin)] py-2 text-sm font-semibold hover:bg-[var(--color-admin-hover)] hover:text-white transition-colors duration-300 click-pressed"
            aria-label="Message user"
          >
            Message
          </button>
        </div> */
}
export default UserProfileCard;
