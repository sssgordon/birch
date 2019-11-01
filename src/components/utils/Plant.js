import React from "react";

export default function Plant(props) {
  if (props.path === "/basket") {
    return (
      <div>
        <button onClick={() => props.deletePlant(props.id)}>X</button>
        <img src={props.imageUrl} />
        <h2>{props.name}</h2>
        <h5>{props.description}</h5>
        <h4>{props.price}</h4>
      </div>
    );
  } else {
    return (
      <div>
        <img src={props.imageUrl} />
        <h2>{props.name}</h2>
        <h5>{props.description}</h5>
        <h4>{props.price}</h4>
        <button onClick={() => props.selectPlant(props.id)}>
          Add to basket
        </button>
      </div>
    );
  }
}
