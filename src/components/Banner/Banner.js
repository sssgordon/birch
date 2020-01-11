import React from "react";
import "./Banner.css";

export default function Banner(props) {
    return (
        <div className="banner__container">
            <h1 className="banner__title">{props.title}</h1>
            <img className="banner" src={props.img} />
        </div>
    );
}
