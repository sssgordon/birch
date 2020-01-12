import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Col, Form, Button } from "react-bootstrap";
import "./Checkout.css";

class CheckoutContainer extends Component {
  render() {
    return (
      <div className="checkout">
        <main>
          <h1 className="title">CHECKOUT</h1>
          <div className="banner-container">
            <img
              className="banner"
              src="https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            />
          </div>
        </main>
        <Form className="checkout-form">
        <p className="totalAmount-checkout">
          {" "}
          <b>TOTAL: €
          {this.props.basket
            .map(plant => parseInt(plant.price))
            .reduce((acc, currentPlant) => acc + currentPlant, 0)}
            </b>
        </p>

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
            <Form.Check type="checkbox" label="Register as a new account" />
          </Form.Group>

          <button type="submit" className="checkout-submit-btn">
            SUBMIT
          </button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    basket: reduxState.basket
  };
};

export default connect(mapStateToProps)(CheckoutContainer);
