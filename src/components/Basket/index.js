import React, { Component } from "react";
import Basket from "./Basket";
import { connect } from "react-redux";

class BasketContainer extends Component {
  render() {
    if (this.props.basket.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <Basket selectedPlants={this.props.basket} />
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
