import React from "react";
import "./Plant.css";
import { Link } from "react-router-dom";

export default function Plant(props) {
  if (props.path === "/basket") {
    return (
      <div className="plant">
        <div className="image-container">
          <Link to={`/product-details/${props.name}`}>
            <img src={props.imageUrl} />
          </Link>
        </div>
        <div className="plant-info">
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
    );
  } else {
    return (
      <div className="plant">
        <div className="image-container">
          <Link to={`/product-details/${props.name}`}>
            <img src={props.imageUrl} />
          </Link>
        </div>
        <div className="plant-info">
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
      </div>
    );
  }
}
