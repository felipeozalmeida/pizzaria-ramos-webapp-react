import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaPlus } from "react-icons/fa";

function PizzaToolbar() {
  return (
    <div className="d-flex align-items-start justify-content-between">
      <Form className="flex-grow-1 mr-3">
        <Form.Group controlId="pizzaNameInput">
          <Form.Label srOnly>Nome</Form.Label>
          <Form.Control type="text" placeholder="Ex.: calabresa, escarola..." />
        </Form.Group>
      </Form>
      <Button variant="primary">
        <FaPlus />
        <span className="d-none d-lg-inline"> Adicionar</span>
      </Button>
    </div>
  );
}

export default PizzaToolbar;
