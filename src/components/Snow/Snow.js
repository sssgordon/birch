import React from "react";
import Plant from "../utils/Plant";
import Header from "../navigationBar/navigationbar";

export default function Snow(props) {
  return (
    <div>
      <Header />
      <main>
        <img src="https://images.pexels.com/photos/2689558/pexels-photo-2689558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        {props.snowPlants.map(plant => {
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
