import React, { Component } from "react";
import Home from "./Home";
import { connect } from "react-redux";
import { getPlants } from "../../actions/plants";
import { addPlant } from "../../actions/basket";

class HomeContainer extends Component {
  selectPlant = id => {
    return this.props.dispatch(
      addPlant(this.props.plants.find(plant => plant.id === id))
    );
  };

  componentDidMount() {
    this.props.dispatch(getPlants());
  }

  render() {
    // console.log("RENDER HOMECONTAINER");
    if (this.props.plants.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <Home
            plants={this.props.plants}
            path={this.props.match.path}
            selectPlant={this.selectPlant}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = reduxState => {
  // console.log("MAP STATE TO HOMECONTAINER");
  return {
    plants: reduxState.plants
  };
};

export default connect(mapStateToProps)(HomeContainer);
