import React from "react";
// import DummyUser, { type User } from "../../../storage/Users";
import { Mail, CalendarFold, MapPin } from "lucide-react";

interface UserProfileCardProps {
  name: string;
  status: string;
  avatarUrl: string;
  email?: string;
  stats?: { label: string; value: string | number }[];
  localization?: string;
  data_of_join?: Date | string;
  onFollow: () => void;
  onMessage: () => void;
}
// ...existing code...
const UserProfileCard: React.FC<UserProfileCardProps> = ({
  name,
  status,
  avatarUrl,
  localization,
  data_of_join,
  email,
  stats,
  onFollow,
  onMessage,
}) => {
  return (
    <section className="w-7xl mx-auto section">
      <div className="w-full rounded-2xl pb-10 profile-card">
        {/* Gradient Header */}
        <div
          className="w-full rounded-t-2xl h-24 bg-gradient-to-r from-chart-1 to-admin"
          style={{ clipPath: "ellipse(150% 100% at 50% 0%)" }}
        />
        <div className="flex w-full -mt-14">
          <div className="z-50 flex gap-3 ml-15">
            <img
              src={avatarUrl}
              alt={`${name} pfp`}
              className="w-24 h-24 border-3 border-accent shadow-lg bg-accent rounded-full"
            />
            <div className="flex flex-col gap-1">
              <h2
                className={`text-2xl font-poppins font-bold ${
                  status === "admin"
                    ? "text-admin"
                    : status === "premium"
                    ? "text-premium"
                    : "text-foreground"
                }`}
              >
                {name}
              </h2>
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
              <div className="flex py-1 px-4 gap-6">
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
                <button className="px-3 py-1 bg-premium text-accent font-poppins rounded-xl click-pressed hover:bg-premium-hover">
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
