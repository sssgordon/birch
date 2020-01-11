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
                    img="https://images.unsplash.com/photo-1535025075092-5a1cf795130b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
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
