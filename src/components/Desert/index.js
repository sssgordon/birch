import React, { Component } from "react";
import { connect } from "react-redux";
import Desert from "./Desert";
import { getDesertPlants } from "../../actions/plants";
import { addPlant } from "../../actions/basket";
import { addWishPlant } from "../../actions/wishlist";

class DesertContainer extends Component {
    selectPlant = id => {
        return this.props.dispatch(
            addPlant(this.props.desertPlants.find(plant => plant.id === id))
        );
    };

    selectWishPlant = id => {
        return this.props.dispatch(
            addWishPlant(this.props.desertPlants.find(plant => plant.id === id))
        );
    };
    componentDidMount() {
        this.props.dispatch(getDesertPlants());
    }

    render() {
        if (!this.props.desertPlants) {
            return <p>Loading...</p>;
        } else {
            return (
                <div>
                    <Desert
                        desertPlants={this.props.desertPlants}
                        selectPlant={this.selectPlant}
                        selectWishPlant={this.selectWishPlant}
                        path={this.props.match.path}
                    />
                </div>
            );
        }
    }
}

const mapStateToProps = reduxState => {
    // console.log("MSTP reduxState", reduxState);
    return {
        desertPlants: reduxState.products.desert
    };
};

export default connect(mapStateToProps)(DesertContainer);
