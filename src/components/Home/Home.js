import React from "react";

import Plant from "../utils/Plant";
import Banner from "../Banner/Banner";
import "./Home.css";

export default function Home(props) {
    return (
        <div className="home">
            <main>
                <Banner
                    title="PLANTS FOR THE ADVENTUROUS"
                    img="https://images.unsplash.com/photo-1505418751847-665ed4106c65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                />
                {/* <h1 className="title">PLANTS FOR THE ADVENTUROUS</h1>
                <img
                    className="banner"
                    src="http://localhost:3000/assets/images/home.jpeg"
                /> */}
                <div className="plants-display">
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
