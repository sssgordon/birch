import React, { Component } from "react";
import { connect } from "react-redux";
import Snow from "./Snow";
import { getSnowPlants } from "../../actions/plants";
import { addPlant } from "../../actions/basket";

class SnowContainer extends Component {
  selectPlant = id => {
    return this.props.dispatch(
      addPlant(this.props.snowPlants.find(plant => plant.id === id))
    );
  };

  componentDidMount() {
    // console.log("SNOW COMPONENT DID MOUNT!");
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
