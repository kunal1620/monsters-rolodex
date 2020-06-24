import React, { useState, useEffect } from "react";

import SearchBar from "../../components/search-bar/search-bar";
import CardList from "../../components/card-list/card-list";

const HomePage = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  const API_USER_LIST = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(API_USER_LIST)
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  const handleSearchChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredMonsters = monsters.filter((m) =>
    m.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBar
        placeholder="Search Monsters"
        handleChange={handleSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default HomePage;
