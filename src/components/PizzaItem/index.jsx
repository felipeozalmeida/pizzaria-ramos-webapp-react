import React from "react";
import Card from "react-bootstrap/Card";
import PizzaItemToolbar from "../PizzaItemToolbar";
import "./styles.scss";

const PizzaItem = (props) => {
  return (
    <Card className="text-light">
      <Card.Img src={props.pizza.imageFile} alt={props.pizza.imageAlt} />
      <Card.ImgOverlay className="PizzaItemOverlay">
        <Card.Title>{props.pizza.name}</Card.Title>
        <Card.Subtitle>{props.pizza.price}</Card.Subtitle>
        <PizzaItemToolbar pizza={props.pizza} onPizzaView={props.onPizzaView} />
      </Card.ImgOverlay>
    </Card>
  );
};

export default PizzaItem;
