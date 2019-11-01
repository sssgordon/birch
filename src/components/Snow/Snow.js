import React from "react";
import Plant from "../utils/Plant";
import "./snow.css";

export default function Snow(props) {
  return (
    <div className="snow">
      <main>
        <h1 className="title">SNOW</h1>
        <img
          className="banner"
          src="https://images.pexels.com/photos/954710/pexels-photo-954710.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
        <div className="plants-display">
          {props.snowPlants.map(plant => {
            return (
              <Plant
                path={props.path}
                selectPlant={props.selectPlant}
                name={plant.name}
                description={plant.description}
                price={plant.price}
                imageUrl={plant.imageUrl}
                id={plant.id}
                key={plant.id}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}
