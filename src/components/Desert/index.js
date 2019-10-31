import React, { Component } from "react";
import { connect } from "react-redux";
import Desert from "./Desert";
import { getDesertPlants } from "../../actions/plants";
import { addPlant } from "../../actions/basket";

class DesertContainer extends Component {
  selectPlant = id => {
    return this.props.dispatch(
      addPlant(this.props.desertPlants.find(plant => plant.id === id))
    );
  };

  componentDidMount() {
    this.props.dispatch(getDesertPlants());
  }

  render() {
    if (this.props.desertPlants.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <Desert
            desertPlants={this.props.desertPlants}
            selectPlant={this.selectPlant}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = reduxState => {
  // console.log("MSTP reduxState", reduxState);
  return {
    desertPlants: reduxState.desert
  };
};

export default connect(mapStateToProps)(DesertContainer);
