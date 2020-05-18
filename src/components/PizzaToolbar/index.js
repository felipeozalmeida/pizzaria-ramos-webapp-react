import React from "react";
import Form from "react-bootstrap/Form";

function PizzaToolbar() {
  return (
    <Form>
      <Form.Group controlId="pizzaNameInput">
        <Form.Label srOnly>Nome</Form.Label>
        <Form.Control type="text" placeholder="Ex.: calabresa, escarola..." />
      </Form.Group>
    </Form>
  );
}

export default PizzaToolbar;
