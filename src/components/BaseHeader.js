import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './BaseHeader.scss';

function BaseHeader() {
  return (
    <header>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-3">Pizzaria Ramos</h1>
          <p className="lead">Atendendo a seus pedidos, sempre!</p>
        </Container>
      </Jumbotron>
    </header>
  )
}

export default BaseHeader;
