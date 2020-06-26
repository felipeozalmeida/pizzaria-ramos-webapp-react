import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PizzaItem from "../../components/PizzaItem";

const PizzaList = (props) => {
  if (props.pizzas.length) {
    return (
      <Row className="mx-n2 mb-n3">
        {props.pizzas.map((pizza) => (
          <Col className="px-2 mb-3" xs={6} sm={4} md={3} lg={2} key={pizza.id}>
            <PizzaItem pizza={pizza} onPizzaView={props.onPizzaView} />
          </Col>
        ))}
      </Row>
    );
  }

  return <h1>That shit doesn't have any pizzas yet!</h1>;
};

export default PizzaList;
