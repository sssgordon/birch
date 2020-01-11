import React from "react";

import Plant from "../utils/Plant";
import Banner from "../Banner/Banner";
import "./snow.css";

export default function Snow(props) {
    return (
        <div className="snow">
            <main>
                <Banner
                    title="SNOW"
                    img="https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1383&q=80"
                />
                <div className="plants-display">
                    {props.snowPlants.map(plant => {
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
