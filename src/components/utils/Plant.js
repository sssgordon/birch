import React from "react";
import "./Plant.css";

export default function Plant(props) {
  if (props.path === "/basket") {
    return (
      <div className="plant">
        <div className="image-container">
          <img src={props.imageUrl} />
        </div>
        <div className="plant-info">
          <h2>{props.name}</h2>
          <h5>{props.description}</h5>
          <h4>{props.price}</h4>
        </div>
        <button
          className="delete-plant"
          onClick={() => props.deletePlant(props.id)}
        >
          Delete from basket
        </button>
      </div>
    );
  } else if (props.path === "/wishlist") {
    return (
      <div className="plant">
        <div className="image-container">
          <img src={props.imageUrl} />
        </div>
        <div className="plant-info">
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
    );
  } else {
    return (
      <div className="plant">
        <div className="image-container">
          <img src={props.imageUrl} />
        </div>
        <div className="plant-info">
          <h2>{props.name}</h2>
          <h5>{props.description}</h5>
          <h4>{props.price}</h4>
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
    );
  }
}
