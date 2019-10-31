import React from "react";
import "./App.css";
import HomeContainer from "./components/Home";
import { Route } from "react-router-dom";
import SnowContainer from "./components/Snow";
import Header from "./components/navigationBar/navigationbar";
import DesertContainer from "./components/Desert";
import About from "./About/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/about" component={About} />
      <Route exact path="/snow" component={SnowContainer} />
      <Route exact path="/desert" component={DesertContainer} />
    </div>
  );
}

export default App;
