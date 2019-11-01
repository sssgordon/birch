import React from "react";
import "./Plant.css";

export default function Plant(props) {
  if (props.path === "/basket") {
    return (
      <div>
        <button
          className="delete-plant"
          onClick={() => props.deletePlant(props.id)}
        >
          X
        </button>
        <img src={props.imageUrl} />
        <h2>{props.name}</h2>
        <h5>{props.description}</h5>
        <h4>{props.price}</h4>
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
      </div>
    );
  }
}
