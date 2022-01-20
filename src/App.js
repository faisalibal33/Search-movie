// import { Component } from "react/cjs/react.production.min";
import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Search from "./component/Search/Search";
import Cards from "./component/Cards/Cards";

const App = () => {
  // render() {
  return (
    <div>
      <Navbar />
      <Search /> <hr />
      <Cards />
    </div>
  );
};
export default App;
