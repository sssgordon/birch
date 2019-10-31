import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Header from "./components/navigationBar/navigationbar";
import About from "./About/index";
import Basket from "./components/Basket";

// Containers
import HomeContainer from "./components/Home";
import SnowContainer from "./components/Snow";
import DesertContainer from "./components/Desert";
import RainforestContainer from "./components/Rainforest";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/about" component={About} />
      <Route exact path="/snow" component={SnowContainer} />
      <Route exact path="/desert" component={DesertContainer} />
      <Route exact path="/rainforest" component={RainforestContainer} />
      <Route exact path="/basket" component={Basket} />
    </div>
  );
}

export default App;
