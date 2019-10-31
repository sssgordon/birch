import React from "react";
import "./App.css";
import HomeContainer from "./components/Home";
import { Route } from "react-router-dom";
import SnowContainer from "./components/Snow";
import Header from "./components/navigationBar/navigationbar";
import DesertContainer from "./components/Desert";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/snow" component={SnowContainer} />
      <Route exact path="/desert" component={DesertContainer} />
    </div>
  );
}

export default App;
