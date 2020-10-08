import React from "react";
import { Link } from "react-router-dom";
import { Container, ImageDiv } from "./styles";
import ButtonBuy from "../ButtonBuy/index";
function CardGrid({ name, price, image, id }) {
  return (
    <Container>
      <ImageDiv>
        {image ? (
          <Link to={`/products/${id}`}>
            <img
              id="img"
              src={"http://187.84.80.162:8082/imagens/" + image}
              alt="produto"
              className="image"
            />
          </Link>
        ) : (
          <Link to={`/products/${id}`}>
            <img
              id="img"
              src={process.env.PUBLIC_URL + "/images/no-image.png"}
              alt="produto"
              className="image"
            />
          </Link>
        )}
      </ImageDiv>

      <h3>{name}</h3>
      <p>
        {price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
      </p>
      <Link to={`/products/${id}`} className="details">
        Ver detalhes do produto
      </Link>
      <ButtonBuy />
    </Container>
  );
}

export default CardGrid;