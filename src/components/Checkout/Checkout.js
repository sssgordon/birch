import React from "react";
import Plant from "../utils/Plant";

export default function Checkout(props) {
  return (
    <div className="checkout">
      <main>
        <h1 className="title">Checkout</h1>
        <img
          className="banner"
          src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        />
        <div className="checkout-display">
          {props.plants.map(plant => {
            return (
              <Plant
                path={props.path}
                selectPlant={props.selectPlant}
                selectWishPlant={props.selectWishPlant}
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
