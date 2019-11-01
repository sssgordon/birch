import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="navbar-div">
        <header className="section-navbar" name="navigation">
          <Link to="/">Home </Link>
          <Link to="/about">About </Link>
          <Link to="/desert">Desert </Link>
          <Link to="/snow">Snow </Link>
          <Link to="/rainforest">Rainforest </Link>
          <Link to="/basket">
            <button className="basket-button">
              <b>Basket</b>
            </button>
          </Link>
        </header>
      </div>
    );
  }
}
