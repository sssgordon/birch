import React, { Component, Fragment } from "react";
// import Checkout from "./Checkout";
import { connect } from "react-redux";
import { Col, Form, Button } from "react-bootstrap";

class CheckoutContainer extends Component {
  componentDidMount() {
    // this.props.dispatch(getPlants());
  }

  render() {
    return (
      <Fragment>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control placeholder="Enter first name" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control placeholder="Enter last name" />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Apartment, studio, or floor" />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="Register as new account" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p className="totalAmount">
          {" "}
          TOTAL: €
          {this.props.basket
            .map(plant => parseInt(plant.price))
            .reduce((acc, currentPlant) => acc + currentPlant, 0)}
        </p>
      </Fragment>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    basket: reduxState.basket
  };
};

export default connect(mapStateToProps)(CheckoutContainer);
