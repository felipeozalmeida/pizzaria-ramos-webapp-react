import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './BaseHeader.scss';

function BaseHeader() {
  return (
    <Jumbotron fluid className="BaseHeader" as="header">
      <Container>
        <h1 className="display-3">Pizzaria Ramos</h1>
        <p className="lead">Atendendo a seus pedidos, sempre!</p>
      </Container>
    </Jumbotron>
  )
}

export default BaseHeader;
