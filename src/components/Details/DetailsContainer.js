import React, { Component } from "react";
import Details from "./Details";
import { connect } from "react-redux";
import { getPlants } from "../../actions/plants";

class DetailContainer extends Component {
  componentDidMount = () => {
    this.props.dispatch(getPlants());
  };

  render() {
    if (this.props.plant.length === 0) {
      return <p>Loading...</p>;
    } else {
      const product = this.props.plant.find(
        plant => plant.name === this.props.match.params.plant
      );
      return (
        <div>
          <Details
            name={product.name}
            price={product.price}
            description={product.description}
            imgUrl={product.imageUrl}
          />
        </div>
      );
    }
  }
}

const mapStateToProps = reduxState => {
  return {
    plant: reduxState.plants
  };
};

export default connect(mapStateToProps)(DetailContainer);
