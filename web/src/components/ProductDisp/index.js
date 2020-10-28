import React from "react";
import { Container } from "./styles";
import { FaCheckCircle } from "react-icons/fa";

function ProductDisp() {
  return (
    <Container>
      <span>
        <FaCheckCircle color={"green"} size={24} />
      </span>
      <p>PRODUTO DISPONÍVEL</p>
    </Container>
  );
}

export default ProductDisp;
