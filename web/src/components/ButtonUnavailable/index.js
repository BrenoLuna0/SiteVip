import React from "react";

import { Container } from "./styles";
import { FaTimes } from "react-icons/fa";

function ButtonUnavailable() {
  return (
    <Container>
      <button>
        <p>Produto Indisponível </p>
        <span>
          <FaTimes size={24} />
        </span>
      </button>
    </Container>
  );
}

export default ButtonUnavailable;
