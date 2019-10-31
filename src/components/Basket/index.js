import React, { Component } from "react";
import Basket from "./Basket";
import { connect } from "react-redux";
import { removePlant } from "../../actions/basket";

class BasketContainer extends Component {
  deletePlant = id => {
    return this.props.dispatch(removePlant(id));
  };

  render() {
    console.log(this.props.match.params);
    if (this.props.basket.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
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
