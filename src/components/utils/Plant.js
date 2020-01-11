import React from "react";
import "./Plant.css";
import { Link } from "react-router-dom";

export default function Plant(props) {
    if (props.path === "/basket") {
        return (
            <div className="plant">
                <Link to={`/product-details/${props.name}`}>
                    <div className="plant__image-container">
                        <img className="plant__image" src={props.imageUrl} />
                    </div>
                </Link>
                <div className="plant__info">
                    <div className="plant__description">
                        <Link to={`/product-details/${props.name}`}>
                            <h2>{props.name}</h2>
                            <h5>{props.description}</h5>
                            <h4>{props.price}</h4>
                        </Link>
                    </div>
                    <button
                        className="delete-plant"
                        onClick={() => props.deletePlant(props.id)}
                    >
                        Delete from basket
                    </button>
                </div>
            </div>
        );
    } else if (props.path === "/wishlist") {
        return (
            <div className="plant">
                <Link to={`/product-details/${props.name}`}>
                    <div className="plant__image-container">
                        <img className="plant__image" src={props.imageUrl} />
                    </div>
                </Link>
                <div className="plant__info">
                    <div className="plant__description">
                        <h2>{props.name}</h2>
                        <h5>{props.description}</h5>
                        <h4>{props.price}</h4>
                    </div>
                    <button
                        className="delete-wish-plant"
                        onClick={() => props.deleteWishPlant(props.id)}
                    >
                        Delete from wishlist
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="plant">
                <Link to={`/product-details/${props.name}`}>
                    <div className="plant__image-container">
                        <img className="plant__image" src={props.imageUrl} />
                    </div>
                </Link>
                <div className="plant__info">
                    <div className="plant__description">
                        <Link to={`/product-details/${props.name}`}>
                            <h2>{props.name}</h2>
                            <h5>{props.description}</h5>
                            <h4>{props.price}</h4>
                        </Link>
                    </div>
                    <button
                        className="add-to-basket"
                        onClick={() => props.selectPlant(props.id)}
                    >
                        Add to basket
                    </button>
                    <button
                        className="add-to-wishlist"
                        onClick={() => props.selectWishPlant(props.id)}
                    >
                        Add to wishlist
                    </button>
                </div>
            </div>
        );
    }
}
