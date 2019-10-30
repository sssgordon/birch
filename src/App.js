import React from "react";
import "./App.css";
import HomeContainer from "./components/Home";
import Header from "./components/navigationBar/navigationbar";


function App() {
  return (
    <div className="App">
      <HomeContainer />
      <Header />
    </div>
  );
}

export default App;
