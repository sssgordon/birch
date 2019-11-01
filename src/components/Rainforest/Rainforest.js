import React from "react";
import Plant from "../utils/Plant";
import "./rainforest.css";

export default function Rainforest(props) {
  return (
    <div className="rainforest">
      <main>
        <h1 className="title">RAINFOREST</h1>
        <div className="banner-container">
          <img
            className="banner"
            src="https://images.pexels.com/photos/927414/pexels-photo-927414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          />
        </div>

        <div className="plants-display">
          {props.rainforestPlants.map(plant => {
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
