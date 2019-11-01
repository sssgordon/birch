import React from "react";
import Plant from "../utils/Plant";
import "./Home.css";

export default function Home(props) {
  return (
    <div className="home">
      <main>
        <h1 className="title">PLANTS FOR THE ADVENTUROUS</h1>
        <img
          className="banner"
          src="https://images.pexels.com/photos/2689558/pexels-photo-2689558.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
        <div className="plants-display">
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
        </div>
      </main>
    </div>
  );
}
