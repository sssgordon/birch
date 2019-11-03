import React from "react";
import { Link } from "react-router-dom";

export default function Detail(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h5>{props.description}</h5>
      <img src={props.imgUrl} />
      <h3>{props.price}</h3>
      <Link to="/">Return</Link>
    </div>
  );
}
