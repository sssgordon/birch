import React from "react";

export default function Plant(props) {
  if (props.path === "/basket") {
    return (
      <div>
        <img src={props.imageUrl} />
        <h4>{props.name}</h4>
        <h6>{props.price}</h6>
      </div>
    );
  } else {
    return (
      <div>
        <img src={props.imageUrl} />
        <h4>{props.name}</h4>
        <h6>{props.price}</h6>
        <button onClick={() => props.selectPlant(props.id)}>
          Add to basket
        </button>
      </div>
    );
  }
}
