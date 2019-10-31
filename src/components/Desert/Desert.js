import React from "react";
import Plant from "../utils/Plant";

export default function Desert(props) {
  return (
    <div>
      <main>
        {props.desertPlants.map(plant => {
          // console.log("mapping desert plants", plants)
          return (
            <Plant
              selectPlant={props.selectPlant}
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

// are we actually using this component? Commenting everything out does not break the app.
