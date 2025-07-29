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
    <header className="bg-background shadow-lg backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a className="flex items-center gap-3" href="/">
            <img src="dumbbell.svg" alt="Icon site" className="w-8 h-8" />
            <h1 className="text-xl font-bold text-gray-900">GymPro</h1>
          </a>
          <div className="flex items-center gap-4">
            {/* SEARCHBAR */}
            <Search />
            <a href="/user">
              <Badge name={DummyUser.name} status={DummyUser.status} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
