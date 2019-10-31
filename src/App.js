import React from "react";
import "./App.css";
import HomeContainer from "./components/Home";
import Header from "./components/navigationBar/navigationbar";
import DesertContainer from "./components/Desert";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/desert" component={DesertContainer} />
    </div>
  );
}

export default App;
