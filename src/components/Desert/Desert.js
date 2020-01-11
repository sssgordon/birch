import React from "react";

import Plant from "../utils/Plant";
import Banner from "../Banner/Banner";
import "./desert.css";

export default function Desert(props) {
    return (
        <div className="desert">
            <main>
                <Banner
                    title="DESERT"
                    img="https://images.unsplash.com/photo-1488197047962-b48492212cda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1347&q=80"
                />
                <div className="plants-display">
                    {props.desertPlants.map(plant => {
                        // console.log("mapping desert plants", plants)
                        return (
                            <Plant
                                path={props.path}
                                selectPlant={props.selectPlant}
                                selectWishPlant={props.selectWishPlant}
                                name={plant.name}
                                price={plant.price}
                                description={plant.description}
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

// are we actually using this component? Commenting everything out does not break the app.
