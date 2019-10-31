import React from "react";
import Plant from "../utils/Plant";

export default function Rainforest(props) {
  return (
    <div>
      <main>
        <img src="https://images.pexels.com/photos/927414/pexels-photo-927414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        {props.rainforestPlants.map(plant => {
          return (
            <Plant
              name={plant.name}
              price={plant.price}
              imageUrl={plant.imageUrl}
              id={plant.id}
              key={plant.id}
            />
          );
        })}
      </main>
    </div>
  );
}
