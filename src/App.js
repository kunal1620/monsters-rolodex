import React, { Component } from "react";
import { Route } from "react-router-dom";

import HomePage from "./pages/home-page/home-page";
import ProfilePage from "./pages/profile-page/profile-page";

import CardList from "./components/card-list/card-list";
import SearchBar from "./components/search-bar/search-bar";

import "./App.css";

const App = () => {
  const ROOT_PATH = "/monsters-rolodex";

  return (
    <div>
      <Route exact path={ROOT_PATH} component={HomePage} />
      <Route path={`${ROOT_PATH}/:monsterId`} component={ProfilePage} />
    </div>
  );
};

export default App;
