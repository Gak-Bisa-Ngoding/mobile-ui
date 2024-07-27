import React from "react";
import { FaSearch } from "react-icons/fa";

type SearchBarProps = {
  query: string;
  placeholder: string;
  onQueryChange: React.ChangeEventHandler<HTMLInputElement>;
  onSearchClick: React.MouseEventHandler<SVGElement>;
  className?: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({
  query,
  placeholder,
  onQueryChange,
  onSearchClick,
  className,
}) => {
  return (
    <section
      className={`w-fit flex align-middle gap-4 justify-center shadow-md rounded-full px-10 py-4 mx-auto ${className}`}
    >
      <FaSearch className="my-auto" onClick={onSearchClick} />
      <input
        autoFocus
        type="text"
        name="query"
        placeholder={placeholder}
        value={query}
        className="focus:outline-none font-bold"
        onChange={onQueryChange}
      />
    </section>
  );
};
