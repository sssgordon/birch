import React, { Component } from "react";
import { connect } from "react-redux";
import Snow from "./Snow";
import { getSnowPlants } from "../../actions/plants";
import { addPlant } from "../../actions/basket";
import { addWishPlant} from '../../actions/wishlist';

class SnowContainer extends Component {
  selectPlant = id => {
    return this.props.dispatch(
      addPlant(this.props.snowPlants.find(plant => plant.id === id))
    );
  };

  selectWishPlant = id => {
    return this.props.dispatch(
      addWishPlant(this.props.snowPlants.find(plant => plant.id === id))
    );
  };

  componentDidMount() {
    this.props.dispatch(getSnowPlants());
  }

  render() {
    if (this.props.snowPlants.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <Snow
            snowPlants={this.props.snowPlants}
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
  // console.log("MAP STATE TO SNOW CONTAINER");
  return {
    snowPlants: reduxState.snow
  };
};

export default connect(mapStateToProps)(SnowContainer);
