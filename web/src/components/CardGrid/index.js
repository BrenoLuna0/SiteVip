import React from "react";
import { Link } from "react-router-dom";
import { Container, ImageDiv } from "./styles";
import ButtonBuy from "../ButtonBuy/index";
import ButtonUnavailable from "../ButtonUnavailable";

require("dotenv").config();

function CardGrid({ name, price, image, id, quantity }) {
  return (
    <Container>
      <ImageDiv>
        <Link to={`/products/${id}`}>
          {image ? (
            <img
              id="img"
              src={`http://192.168.15.10/imagens//${image}`}
              alt="produto"
              className="image"
            />
          ) : (
            <img
              id="img"
              src={process.env.PUBLIC_URL + "/images/no-image.png"}
              alt="produto"
              className="image"
            />
          )}
        </Link>
      </ImageDiv>

      <h3>{name}</h3>
      <p>
        {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </p>
      <Link to={`/products/${id}`} className="details">
        Ver detalhes do produto
      </Link>
      {quantity > 0 ? (
        <ButtonBuy id={id} title="Adicionar ao carrinho" />
      ) : (
        <ButtonUnavailable />
      )}
    </Container>
  );
}

export default CardGrid;
