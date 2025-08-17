import React, { useEffect, useState, type ReactNode } from "react";
import {
  Share2,
  Settings,
  MoveLeft,
  Move,
  X,
  LogOut,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getUserFromStorage } from "../../storage/Users";
import { useLocation } from "react-router-dom";
import { Alert, AlertTitle, AlertDescription } from "../ui/alert";

const iconMap = {
  arrow: <MoveLeft className="img-small text-muted-foreground" />,
  close: <X className="img-small text-muted-foreground" />,
};

interface UserNavbarIconProps {
  iconType: "arrow" | "close";
  BackTo: string;
  LocalisationBack: string;
  onLogout: () => void;
}
function UserNavbar({
  iconType,
  BackTo,
  LocalisationBack,
  onLogout,
}: UserNavbarIconProps) {
  const icon = iconMap[iconType];
  const currentUser = getUserFromStorage();
  const phnm = useLocation().pathname;

  // SHARE Profil
  const [share, setShare] = useState<boolean>(false);
  const gitRepo = "https://github.com/Marmo77/gym-worker-exercise";
  const handleShare = () => {
    setShare(!share);
    navigator.clipboard.writeText(
      "https://github.com/Marmo77/gym-worker-exercise"
    );
  };
  useEffect(() => {
    const timeout = setTimeout(() => setShare(false), 2000);
    return () => clearTimeout(timeout);
  }, [share]);

  return (
    <header className="bg-background/10 sticky top-0 z-50 shadow-lg backdrop-blur">
      <AnimatePresence>
        {share && (
          <motion.div
            className="flex justify-center items-center"
            key={"alert"}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Alert
              className="absolute bg-background shadow-2xs drop-shadow-lg max-w-96 top-5 "
              variant={"destructive"}
            >
              <Terminal />
              <AlertTitle>Great job!</AlertTitle>
              <AlertDescription>
                Its already in your clipboard!
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <a href={BackTo}>
              <div className="flex gap-3 relative text-muted-foreground items-center">
                {icon}
                <span className="text-sm">Back to {LocalisationBack}</span>
              </div>
            </a>
            {/* DASH LINE */}
            <div className="text-muted-foreground">|</div>
            <div className="flex gap-2.5 font-poppins">
              <span
                className={
                  currentUser?.status === "user"
                    ? "text-primary"
                    : currentUser?.status === "premium"
                    ? "text-premium"
                    : currentUser?.status === "admin"
                    ? "text-admin"
                    : "text-accent-foreground"
                }
              >
                {phnm === "/user"
                  ? `${currentUser?.name || "User"}`
                  : phnm === "/user/training"
                  ? "Training Plan"
                  : "Unknown"}
              </span>
              {phnm === "/user" ? "Profile" : " "}
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* SHARE AND SETTINGS */}
            <button
              className="flex gap-4 items-center text-sm px-2 py-1.5 rounded-lg shadow-md bg-accent/40 group hover:scale-105 duration-300 transition-all hover:bg-accent click-pressed"
              onClick={handleShare}
            >
              <Share2 className="img-small text-accent-foreground group-hover:-rotate-4 group-hover:scale-[110%] duration-200 delay-75" />
              <span>Share profile</span>
            </button>
            <button className="px-2 py-1.5 rounded-lg text-accent-foreground shadow-md hover:bg-accent group transition-colors duration-300 click-pressed">
              <Settings
                className="img-small
                group-hover:scale-105 group-hover:rotate-3 text-accent-foreground"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default UserNavbar;
