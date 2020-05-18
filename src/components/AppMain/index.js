import React from "react";
import Container from "react-bootstrap/Container";
import PizzaToolbar from "../PizzaToolbar";

function AppMain() {
  return (
    <main>
      <Container>
        <h2 className="sr-only">Pizzas</h2>
        <PizzaToolbar />
      </Container>
    </main>
  );
}

export default AppMain;
