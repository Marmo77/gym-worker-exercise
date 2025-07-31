import React, { useState } from "react";
import Badge from "../ui/Badge";
import Search from "../ui/Search";
import DummyUser from "../../storage/Users";
import { Bell, Settings } from "lucide-react";
interface MenuItems {
  title: string;
  link: string;
}
const MenuProps: MenuItems[] = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
];

function Navbar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [Notification, setNotification] = useState<boolean>(true);
  // Function to handle search input changes

  return (
    <header className="bg-background shadow-lg backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a className="flex items-center gap-3" href="/">
            <img src="dumbbell.svg" alt="Icon site" className="w-8 h-8" />
            <h1 className="text-xl font-bold text-gray-900">GymPro</h1>
          </a>
          <div className="flex items-center gap-4">
            {/* SEARCHBAR */}
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className="flex gap-3 items-center">
              <button
                className="px-2 py-1.5 rounded-lg text-accent-foreground shadow-md hover:bg-accent hover:scale-105 group transition-transform duration-300 relative click-pressed"
                onClick={() => setNotification(false)}
              >
                {Notification && (
                  <span className="absolute notification-loop top-0 right-0 w-2 h-2 z-50 rounded-full group " />
                )}
                <Bell className="img-small group-hover:scale-105 group-hover:rotate-3 text-accent-foreground" />
              </button>
              <button className="px-2 py-1.5 rounded-lg text-accent-foreground shadow-md hover:bg-accent group transition-colors duration-300 click-pressed">
                <Settings
                  className="img-small
                group-hover:scale-105 group-hover:rotate-3 text-accent-foreground"
                />
              </button>
              {/* USER BADGE */}
              <a href="/user">
                <Badge
                  username={DummyUser.username}
                  status={DummyUser.status ?? "user"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
