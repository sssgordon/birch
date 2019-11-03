import React, { Component } from "react";
import Wishlist from "./Wishlist";
import { connect } from "react-redux";
// import { removePlant } from "../../actions/basket";

class WishlistContainer extends Component {
//   deletePlant = id => {
//     return this.props.dispatch(removePlant(id));
//   };

  render() {
    console.log('logging from index', this.props.match.params);
    // this.props.basket.map(plant => plant.price).reduce((acc, currentPlant) => acc + currentPlant, 0)

    if (this.props.wishlist.length === 0) {
      return <p>Your wishlist is currently empty.</p>;
    } else {
      return ( 
        <div className="wishlist">
          <Wishlist
            // deletePlant={this.deletePlant}
            selectedWishPlants={this.props.wishlist}
            path={this.props.match.path}
          />
          <p className="totalAmountWishlist">
            {" "}
            The total amount is: €
            {this.props.wishlist
              .map(plant => parseInt(plant.price))
              .reduce((acc, currentPlant) => acc + currentPlant, 0)}
          </p>
        </div>
      );
    }
  }
}

const mapStateToProps = reduxState => {
  console.log("MAP STATE TO WISHLIST CONTAINER");
  return {
    wishlist: reduxState.wishlist
  };
};

export default connect(mapStateToProps)(WishlistContainer);
