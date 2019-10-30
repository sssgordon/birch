import React from "react";
import "./App.css";
import HomeContainer from "./components/Home";
import Header from "./components/navigationBar/navigationbar";
import DesertContainer from './components/Desert/DesertContainer';
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <HomeContainer />
      <Route exact path="/desert" component={DesertContainer} />
      <Header />
    </div>
  );
}

export default App;
