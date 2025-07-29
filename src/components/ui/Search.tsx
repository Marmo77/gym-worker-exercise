import React from "react";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
  // Function to handle search input changes
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    if (query.length <= 0) {
      return setSearchTerm(""); // Clear search if input is empty
    }
    setSearchTerm(query);
    // Implement search logic here, e.g., filter exercises based on query
    if (query.length > 1) {
      // min 2 letters to search
      console.log("Searching for:", query);
    }
  };
  return (
    <div className="flex items-center gap-2 px-3 py-1 max-w-md w-full rounded-md bg-input-background shadow-md transition-all focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background">
      <img src="search.svg" alt="Search Icon" className="h-4 w-4 opacity-70" />
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search exercises..."
        className="w-full bg-transparent text-sm placeholder-muted-foreground focus:outline-none"
      />
    </div>
  );
};

export default Search;
