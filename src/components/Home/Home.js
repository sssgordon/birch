import React from "react";
import Plant from "../utils/Plant";

export default function Home(props) {
  return (
    <div>
      {/* nav and image */}
      <main>
        {props.plants.map(plant => {
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
