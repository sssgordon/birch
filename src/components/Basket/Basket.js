import React from "react";
import Plant from "../utils/Plant";

export default function Basket(props) {
  return (
    <div>
      {props.selectedPlants.map(plant => (
        <Plant
          deletePlant={props.deletePlant}
          path={props.path}
          name={plant.name}
          price={plant.price}
          imageUrl={plant.imageUrl}
          id={plant.id}
          key={plant.id}
        />
      ))}
    </div>
  );
}
