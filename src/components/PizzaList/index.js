import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import PizzaItem from "../../components/PizzaItem";

function PizzaList() {
  return (
    <Row>
      <Col xs={6} sm={4} md={3} lg={2}>
        <PizzaItem />
      </Col>
    </Row>
  );
}

export default PizzaList;
