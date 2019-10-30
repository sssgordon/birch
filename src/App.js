import React from "react";
import "./App.css";
import HomeContainer from "./components/Home";
import Header from "./components/navigationBar/navigationbar";
import { Route } from "react-router-dom";
import SnowContainer from "./components/Snow";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/snow" component={SnowContainer} />
      <Header />
    </div>
  );
}

export default App;
