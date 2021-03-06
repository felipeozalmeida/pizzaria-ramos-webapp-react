import React from "react";
import Button from "react-bootstrap/Button";
import { FaPen, FaTrash } from "react-icons/fa";
import "./styles.scss";

const PizzaItemToolbar = (props) => {
  return (
    <div className="PizzaItemToolbar">
      <Button
        className="PizzaItemToolbar__button"
        variant="outline-light"
        size="sm"
        onClick={() => props.onPizzaView(props.pizza)}
      >
        <FaPen />
        <span className="sr-only">Editar</span>
      </Button>
      <Button
        className="PizzaItemToolbar__button"
        variant="outline-light"
        size="sm"
      >
        <FaTrash />
        <span className="sr-only">Editar</span>
      </Button>
    </div>
  );
};

export default PizzaItemToolbar;
