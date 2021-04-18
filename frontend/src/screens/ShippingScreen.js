// import React from "react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { saveShippingAddress } from "../actions/cartActions";
// import { createBrowserHistory } from "history";
import CheckoutSteps from "../components/CheckoutSteps";
function ShippingScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [address, setaddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push("/payment");
  };

  return (
    <FormContainer>
        <CheckoutSteps step1 step2 />
        <h1>Shipping</h1>
      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="address"
          placeholder="Enter address"
          value={address}
          required
          onChange={(e) => setaddress(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="city">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="city"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="postalCode">
        <Form.Label>Postal code</Form.Label>
        <Form.Control
          type="postalCode"
          placeholder="Enter postalCode"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Form.Group controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="country"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        ></Form.Control>
      </Form.Group>

      <Button type="submit" onClick={onSubmitHandler}>
        Continue
      </Button>
    </FormContainer>
  );
}

export default ShippingScreen;
