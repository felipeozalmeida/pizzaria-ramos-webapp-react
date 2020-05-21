import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import PizzaToolbar from "../../components/PizzaToolbar";
import PizzaList from "../../components/PizzaList";

function AppMain() {
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

  return (
    <main>
      <Container>
        <PizzaToolbar />
        <PizzaList pizzas={pizzas} />
      </Container>
    </main>
  );
}

export default AppMain;
