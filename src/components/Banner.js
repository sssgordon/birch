import React from "react";

export default function Banner(props) {
    return (
        <div className="banner-container">
            <h1 className="title">{props.title}</h1>
            <img className="banner" src={props.img} />
        </div>
    );
}
