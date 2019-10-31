import React, { Component } from "react";
import { connect } from "react-redux";
import Snow from "./Snow";
import { getSnowPlants } from "../../actions/plants";

class SnowContainer extends Component {
  componentDidMount() {
    console.log("SNOW COMPONENT DID MOUNT!");
    this.props.dispatch(getSnowPlants());
  }

  render() {
    if (this.props.snowPlants.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <Snow snowPlants={this.props.snowPlants} />
        </div>
      );
    }
  }
}

const mapStateToProps = reduxState => {
  console.log("MAP STATE TO SNOW CONTAINER");
  return {
    snowPlants: reduxState.snow
  };
};

export default connect(mapStateToProps)(SnowContainer);
