import React from "react";
import Plant from "../utils/Plant";

export default function Desert(props) {
  return (
    <div>
      <main>
        <img src="https://images.pexels.com/photos/80454/tree-desert-namibia-dead-vlei-80454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        {props.desertPlants.map(plant => {
          // console.log("mapping desert plants", plants)
          return (
            <Plant
              path={props.path}
              selectPlant={props.selectPlant}
              name={plant.name}
              price={plant.price}
              description={plant.description}
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
