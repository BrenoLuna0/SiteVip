import React from "react";
import { Link } from "react-router-dom";
import { CgSmileSad } from "react-icons/cg";
import { FaArrowLeft } from "react-icons/fa";

import { Container } from "./styles";

function ProductNotFound() {
  return (
    <Container>
      <div className="back">
        <Link to="/">
          <FaArrowLeft />
          <span>Voltar para a home</span>
        </Link>
      </div>
      <div className="content align-middle">
        <div>
          <CgSmileSad size={128} color="#666" />
        </div>
        <div>
          <p>Não conseguimos encontrar o seu produto! :(</p>
          <p>Revise o termo e tente novamente.</p>
        </div>
      </div>
    </Container>
  );
}

export default ProductNotFound;
