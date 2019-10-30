import React from "react";
import Plant from "../utils/Plant";
import Header from "../navigationBar/navigationbar";

export default function DesertPlants(props) {
  return (
    <div>
      <Header />
      <main>
        {console.log('accessing the plants in Desert', props.desertPlants)};
        
        {props.desertPlants.map(plants => {
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