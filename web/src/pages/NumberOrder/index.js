import React from "react";

import { Container } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BsCheckCircle } from "react-icons/bs";

function NumberOrder(props) {
  const orderNumber = props.match.params.idPedido;
  console.log(orderNumber);
  return (
    <>
      <Header />
      <Container>
        <div className="span">
          <span>
            <BsCheckCircle size={72} color="green"></BsCheckCircle>
          </span>
        </div>
        <div className="text">
          <h1>Seu pedido {orderNumber} está sendo processado.</h1>
          <h3>Obrigado por comprar conosco!</h3>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default NumberOrder;
