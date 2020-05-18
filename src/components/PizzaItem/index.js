import React from "react";
import Card from "react-bootstrap/Card";
import PizzaItemToolbar from "../PizzaItemToolbar";

function PizzaItem() {
  return (
    <Card className="text-light">
      <Card.Img src="https://picsum.photos/200" alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Subtitle>Card subtitle</Card.Subtitle>
        <PizzaItemToolbar />
      </Card.ImgOverlay>
    </Card>
  );
}

export default PizzaItem;
