import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PizzaItem from "../../components/PizzaItem";

function PizzaList({ pizzas }) {
  if (pizzas.length) {
    return (
      <Row>
        {pizzas.map((pizza) => (
          <Col xs={6} sm={4} md={3} lg={2} key={pizza.id}>
            <PizzaItem pizza={pizza} />
          </Col>
        ))}
      </Row>
    );
  }

  return <h1>That shit doesn't have any pizzas yet!</h1>;
}

export default PizzaList;
