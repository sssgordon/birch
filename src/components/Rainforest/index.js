import React, { Component } from "react";
import { connect } from "react-redux";
import Rainforest from "./Rainforest";
import { getRainforestPlants } from "../../actions/plants";

class RainforestContainer extends Component {
  componentDidMount() {
    // console.log("Rainforest COMPONENT DID MOUNT!");
    this.props.dispatch(getRainforestPlants());
  }

  render() {
      console.log(this.props.rainforestPlants);

    if (this.props.rainforestPlants.length === 0) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <Rainforest rainforestPlants={this.props.rainforestPlants} />
        </div>
      );
    }
  }
}

const mapStateToProps = reduxState => {
//   console.log("Mapping rainforest state", reduxState, reduxState.rainforest);
  return {
    rainforestPlants: reduxState.rainforest
  };
};

export default connect(mapStateToProps)(RainforestContainer);