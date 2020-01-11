import React from "react";

import Plant from "../utils/Plant";
import Banner from "../Banner";
import "./desert.css";

export default function Desert(props) {
    return (
        <div className="desert">
            <main>
                <Banner
                    title="DESERT"
                    img="https://images.pexels.com/photos/80454/tree-desert-namibia-dead-vlei-80454.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
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
