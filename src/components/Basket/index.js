import React, { Component } from "react";
import Basket from "./Basket";
import { connect } from "react-redux";
import { removePlant } from "../../actions/basket";
import { Link } from "react-router-dom";

class BasketContainer extends Component {
    deletePlant = id => {
        return this.props.dispatch(removePlant(id));
    };

    render() {
        if (this.props.basket.length === 0) {
            return <p className="empty">Your basket is currently empty.</p>;
        } else {
            return (
                <div className="basket">
                    <div className="checkout">
                        <p className="totalAmount">
                            {" "}
                            <b>
                                The total amount is: €
                                {this.props.basket
                                    .map(plant => parseInt(plant.price))
                                    .reduce(
                                        (acc, currentPlant) =>
                                            acc + currentPlant,
                                        0
                                    )}
                            </b>
                        </p>
                        <Link to="/checkout">
                            <button className="checkout-button">
                                Go to checkout
                            </button>
                        </Link>
                    </div>

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
    return {
        basket: reduxState.basket
    };
};

export default connect(mapStateToProps)(BasketContainer);
