import React from "react";
import Plant from "../utils/Plant";

export default function Basket(props) {
  return (
    <div>
      {props.selectedPlants.map(plant => (
        <Plant
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
