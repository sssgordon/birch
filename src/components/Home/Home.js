import React from "react";
import Plant from "../utils/Plant";

export default function Home(props) {
  return (
    <div>
      <main>
        <h1>PLANTS FOR THE ADVENTUROUS</h1>
        <img src="https://images.pexels.com/photos/2689558/pexels-photo-2689558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" />
        {props.plants.map(plant => {
          return (
            <Plant
              path={props.path}
              selectPlant={props.selectPlant}
              name={plant.name}
              description={plant.description}
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
