import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/navigationBar/navigationbar";
import About from "./About/index";
import Basket from "./components/Basket";
import Wishlist from './components/Wishlist'

// Containers
import HomeContainer from "./components/Home";
import SnowContainer from "./components/Snow";
import DesertContainer from "./components/Desert";
import RainforestContainer from "./components/Rainforest";
import DetailsContainer from "./components/Details/DetailsContainer";
import CheckoutContainer from "./components/Checkout"

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/about" component={About} />
      <Route exact path="/snow" component={SnowContainer} />
      <Route exact path="/desert" component={DesertContainer} />
      <Route exact path="/rainforest" component={RainforestContainer} />
      <Route exact path="/basket" component={Basket} />
      <Route path="/product-details/:plant" component={DetailsContainer} />
      <Route exact path="/wishlist" component={Wishlist} />
      <Route exact path="/checkout" component={CheckoutContainer} />
    </div>
  );
}

export default App;