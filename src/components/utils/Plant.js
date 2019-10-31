import React from "react";

export default function Plant(props) {
  return (
    <div>
      <img src={props.imageUrl} />
      <h4>{props.name}</h4>
      <h6>{props.price}</h6>
    </div>
  );
}
