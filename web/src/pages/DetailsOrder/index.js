import React from "react";

import { Container, DetailsPayment } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function DetailsOrder(props) {
  const idDav = props.match.params.id;
  console.log(idDav);

  return (
    <>
      <Header />
      <Container>
        <h3>Detalhamento do pedido {idDav}</h3>
        <DetailsPayment>
          <div className="payment-method">
            <h4>Método de pagamento</h4>
          </div>
          <div className="payment-total"></div>
        </DetailsPayment>
      </Container>
      <Footer />
    </>
  );
}

export default DetailsOrder;
