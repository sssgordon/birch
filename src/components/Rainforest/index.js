import React, { Component } from "react";
import { connect } from "react-redux";
import Rainforest from "./Rainforest";
import { getRainforestPlants } from "../../actions/plants";
import { addPlant } from "../../actions/basket";
import { addWishPlant } from "../../actions/wishlist";

class RainforestContainer extends Component {
    selectPlant = id => {
        return this.props.dispatch(
            addPlant(this.props.rainforestPlants.find(plant => plant.id === id))
        );
    };

    selectWishPlant = id => {
        return this.props.dispatch(
            addWishPlant(
                this.props.rainforestPlants.find(plant => plant.id === id)
            )
        );
    };

    componentDidMount() {
        // console.log("Rainforest COMPONENT DID MOUNT!");
        this.props.dispatch(getRainforestPlants());
    }

    render() {
        console.log(this.props.rainforestPlants);

        if (!this.props.rainforestPlants) {
            return <p>Loading...</p>;
        } else {
            return (
                <div>
                    <Rainforest
                        rainforestPlants={this.props.rainforestPlants}
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
    //   console.log("Mapping rainforest state", reduxState, reduxState.rainforest);
    return {
        rainforestPlants: reduxState.products.rainforest
    };
};

export default connect(mapStateToProps)(RainforestContainer);
