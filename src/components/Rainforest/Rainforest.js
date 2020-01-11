import React from "react";

import Plant from "../utils/Plant";
import Banner from "../Banner/Banner";
import "./rainforest.css";

export default function Rainforest(props) {
    return (
        <div className="rainforest">
            <main>
                <Banner
                    title="RAINFOREST"
                    img="https://images.pexels.com/photos/927414/pexels-photo-927414.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                />
                <div className="plants-display">
                    {props.rainforestPlants.map(plant => {
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
