import React from "react";
import "./App.css";
import HomeContainer from "./components/Home";
import { Route } from "react-router-dom";
import SnowContainer from "./components/Snow";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/snow" component={SnowContainer} />
    </div>
  );
}

export default App;
