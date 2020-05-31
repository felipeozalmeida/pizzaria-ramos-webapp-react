import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./styles.scss";

const AppHeader = () => {
  return (
    <Jumbotron fluid className="AppHeader" as="header">
      <Container>
        <h1 className="display-3">Pizzaria Ramos</h1>
        <p className="lead">Atendendo a seus pedidos, sempre!</p>
      </Container>
    </Jumbotron>
  );
};

export default AppHeader;
