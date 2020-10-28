import React from "react";

import { Container } from "./styles";
import { FaTimes } from "react-icons/fa";

function ProductUnavailable() {
  return (
    <Container>
      <span>
        <FaTimes color={"grey"} size={24} />
      </span>
      <p>PRODUTO INDISPONÍVEL</p>
    </Container>
  );
}

export default ProductUnavailable;
