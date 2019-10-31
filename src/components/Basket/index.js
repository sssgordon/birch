import React, { Component } from "react";
import Basket from "./Basket";
import { connect } from "react-redux";

class BasketContainer extends Component {
  render() {
    console.log(this.props.match.params);
    if (this.props.basket.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <Basket
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
