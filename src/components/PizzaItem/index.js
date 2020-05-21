import React from "react";
import Card from "react-bootstrap/Card";
import PizzaItemToolbar from "../PizzaItemToolbar";

function PizzaItem({ pizza }) {
  return (
    <Card className="text-light">
      <Card.Img src={pizza.imageFile} alt={pizza.imageAlt} />
      <Card.ImgOverlay>
        <Card.Title>{pizza.name}</Card.Title>
        <Card.Subtitle>{pizza.price}</Card.Subtitle>
        <PizzaItemToolbar />
      </Card.ImgOverlay>
    </Card>
  );
}

export default PizzaItem;
