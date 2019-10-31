import React, { Component } from "react";
import Basket from "./Basket";
import { connect } from "react-redux";
import { removePlant } from "../../actions/basket";

class BasketContainer extends Component {
  deletePlant = id => {
    return this.props.dispatch(removePlant(id));
  };

  render() {
    // console.log(this.props.match.params);
    // this.props.basket.map(plant => plant.price).reduce((acc, currentPlant) => acc + currentPlant, 0)

    if (this.props.basket.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <p>€ {this.props.basket.map(plant => parseInt(plant.price)).reduce((acc, currentPlant) => acc + currentPlant, 0)}</p>
          <Basket
            deletePlant={this.deletePlant}
            selectedPlants={this.props.basket}
            path={this.props.match.path}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = reduxState => {
  console.log("MAP STATE TO BASKET CONTAINER");
  return {
    basket: reduxState.basket
  };
};

export default connect(mapStateToProps)(BasketContainer);
