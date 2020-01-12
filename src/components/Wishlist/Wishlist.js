import React from "react";
import Plant from "../utils/Plant";
import "./Wishlist.css";

export default function Wishlist(props) {
    return (
        <div className="wishlist">
            <div className="wishlist-plants">
                {props.selectedWishPlants.map(plant => (
                    <Plant
                        deleteWishPlant={props.deleteWishPlant}
                        path={props.path}
                        name={plant.name}
                        price={plant.price}
                        imageUrl={plant.imageUrl}
                        id={plant.id}
                        key={plant.id}
                    />
                ))}
            </div>
        </div>
    );
}
