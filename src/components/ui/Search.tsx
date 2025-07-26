import React from "react";

const Search = () => {
  return (
    <div className="flex items-center gap-2 px-3 py-1 max-w-md w-full rounded-md bg-input-background shadow-sm transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background">
      <img src="search.svg" alt="Search Icon" className="h-4 w-4 opacity-70" />
      <input
        type="text"
        placeholder="Search exercises..."
        className="w-full bg-transparent text-sm placeholder-muted-foreground focus:outline-none"
      />
    </div>
  );
};

export default Search;
