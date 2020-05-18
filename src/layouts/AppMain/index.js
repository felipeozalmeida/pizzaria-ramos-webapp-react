import React from "react";
import Container from "react-bootstrap/Container";
import PizzaToolbar from "../../components/PizzaToolbar";
import PizzaList from "../../components/PizzaList";

function AppMain() {
  return (
    <main>
      <Container>
        <PizzaToolbar />
        <PizzaList />
      </Container>
    </main>
  );
}

export default AppMain;
