import React from "react";
import Badge from "../ui/Badge";
import Search from "../ui/Search";
import DummyUser from "../../storage/Users";
interface MenuItems {
  title: string;
  link: string;
}
const MenuProps: MenuItems[] = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
];

function Navbar() {
  return (
    <header className="bg-background shadow-xl shadow-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="dumbbell.svg" alt="Icon site" className="w-8 h-8" />
            <h1 className="text-xl font-bold text-gray-900">GymPro</h1>
          </div>
          <div className="flex items-center gap-4">
            {/* SEARCHBAR */}
            <Search />
            <Badge name={DummyUser.name} premium={DummyUser.premium} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
