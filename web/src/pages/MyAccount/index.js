import React from "react";

import { Container, LeftSide, RightSide } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function MyAccount() {
  return (
    <>
      <Header />
      <Container>
        <div>
          <h1 style={{ textAlign: "center", marginTop: "12px" }}>
            Meus pedidos
          </h1>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default MyAccount;
