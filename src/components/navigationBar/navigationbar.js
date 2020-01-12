import React from "react";
import { Link } from "react-router-dom";
import "./navigationbar.css";

export default class Header extends React.Component {
    render() {
        return (
            <div className="navigation">
                <header className="navigation__header">
                    <Link to="/">Home </Link>
                    <Link to="/about">About </Link>
                    <Link to="/desert">Desert </Link>
                    <Link to="/snow">Snow </Link>
                    <Link to="/rainforest">Rainforest </Link>
                    <Link to="/wishlist">
                        <button className="wishlist-button">
                            <b>Wishlist</b>
                        </button>
                    </Link>
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
