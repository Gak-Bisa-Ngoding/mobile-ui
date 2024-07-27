import React, { useEffect, useState } from "react";
import { Button, SearchBar } from "../../components";
import axios from "axios";

export const Home: React.FC = () => {
  const [query, setQuery] = useState("");

  const getProducts = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("failed fetching products");
        }

        return response.data;
      })
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!query) {
        return;
      }
      getProducts();
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleQueryChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    console.log(query);
  };

  const handleSearchClicked = () => {
    getProducts();
  };

  return (
    <section>
      <SearchBar
        placeholder="Search..."
        className="my-4"
        query={query}
        onQueryChange={handleQueryChanged}
        onSearchClick={handleSearchClicked}
      />
      <Button text="testing" />
    </section>
  );
};
