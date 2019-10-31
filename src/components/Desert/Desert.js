import React from "react";
import Plant from "../utils/Plant";

export default function Desert(props) {
  return (
    <div>
      <main>
        {props.desertPlants.map(plants => {
          // console.log("mapping desert plants", plants)
          return (
            <Plant
              name={plants.name}
              price={plants.price}
              imageUrl={plants.imageUrl}
              id={plants.id}
              key={plants.id}
            />
          );
        })}
      </main>
    </div>
  );
}

// are we actually using this component? Commenting everything out does not break the app.