import React, { Component } from "react";
import { connect } from "react-redux";
import Rainforest from "./Rainforest";
import { getRainforestPlants } from "../../actions/plants";
import { addPlant } from "../../actions/basket";

class RainforestContainer extends Component {
  selectPlant = id => {
    return this.props.dispatch(
      addPlant(this.props.rainforestPlants.find(plant => plant.id === id))
    );
  };

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
          <Rainforest
            rainforestPlants={this.props.rainforestPlants}
            selectPlant={this.selectPlant}
            path={this.props.match.path}
          />
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
