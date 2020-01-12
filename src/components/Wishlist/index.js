import React, { Component } from "react";
import Wishlist from "./Wishlist";
import { connect } from "react-redux";
import { removeWishPlant } from "../../actions/wishlist";

class WishlistContainer extends Component {
    deleteWishPlant = id => {
        return this.props.dispatch(removeWishPlant(id));
    };

    render() {
        if (this.props.wishlist.length === 0) {
            return <p className="empty">Your wishlist is currently empty.</p>;
        } else {
            return (
                <div className="wishlist">
                    <div className="checkout">
                        <p className="totalAmount">
                            {" "}
                            The total amount is: €
                            {this.props.wishlist
                                .map(plant => parseInt(plant.price))
                                .reduce(
                                    (acc, currentPlant) => acc + currentPlant,
                                    0
                                )}
                        </p>
                    </div>
                    <Wishlist
                        deleteWishPlant={this.deleteWishPlant}
                        selectedWishPlants={this.props.wishlist}
                        path={this.props.match.path}
                    />
                </div>
            );
        }
    }
}

const mapStateToProps = reduxState => {
    // console.log("MAP STATE TO WISHLIST CONTAINER");
    return {
        wishlist: reduxState.wishlist
    };
};

export default connect(mapStateToProps)(WishlistContainer);
