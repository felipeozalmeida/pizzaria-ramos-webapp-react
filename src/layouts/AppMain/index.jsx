import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import PizzaToolbar from "../../components/PizzaToolbar";
import PizzaList from "../../components/PizzaList";

const AppMain = () => {
  const handlePizzaView = (pizza) => {
    setPizza(pizza);
    setShowPizza(true);
  };
  const handlePizzaClose = () => setShowPizza(false);

  const [showPizza, setShowPizza] = useState(false);
  const [pizza, setPizza] = useState(null);
  const [pizzas] = useState([
    {
      id: 1,
      name: "Calabresa",
      price: 22,
      imageFile: "https://picsum.photos/200",
      imageAlt: "Foto de uma pizza sabor calabresa.",
    },
    {
      id: 2,
      name: "Muçarela",
      price: 22,
      imageFile: "https://picsum.photos/200",
      imageAlt: "Foto de uma pizza sabor muçarela.",
    },
    {
      id: 3,
      name: "Baiana",
      price: 25,
      imageFile: "https://picsum.photos/200",
      imageAlt: "Foto de uma pizza sabor baiana.",
    },
    {
      id: 4,
      name: "Portuguesa",
      price: 25,
      imageFile: "https://picsum.photos/200",
      imageAlt: "Foto de uma pizza sabor portuguesa.",
    },
    {
      id: 5,
      name: "Brócolis",
      price: 25,
      imageFile: "https://picsum.photos/200",
      imageAlt: "Foto de uma pizza sabor brócolis.",
    },
    {
      id: 6,
      name: "Lombo",
      price: 25,
      imageFile: "https://picsum.photos/200",
      imageAlt: "Foto de uma pizza sabor lombo.",
    },
  ]);

  // TODO: Follow issue for why modal animation is currently disabled
  // https://github.com/react-bootstrap/react-bootstrap/issues/5075

  return (
    <main>
      <Container>
        <PizzaToolbar />
        <PizzaList pizzas={pizzas} onPizzaView={handlePizzaView} />
        {pizza && (
          <Modal show={showPizza} onHide={handlePizzaClose} animation={false}>
            <Modal.Header closeButton>
              <Modal.Title>{pizza.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>Price: {pizza.price}</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handlePizzaClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handlePizzaClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </Container>
    </main>
  );
};

export default AppMain;
