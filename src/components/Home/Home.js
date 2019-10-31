import React from "react";
import Plant from "../utils/Plant";

export default function Home(props) {
  return (
    <div>
      <main>
        <img src="https://as1.ftcdn.net/jpg/02/65/59/40/500_F_265594015_RTi1Vitb6h3jA6R64A2Ob3TIuvdJLkmc.jpg" />
        {props.plants.map(plant => {
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
