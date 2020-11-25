import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, ImageDiv } from "./styles";
import ButtonBuy from "../ButtonBuy/index";
import ButtonUnavailable from "../ButtonUnavailable";

import { useAxios } from "../../hooks/useAxios";

import api from "../../services/api";

function CardGrid({ name, price, image, id, quantity }) {
  const [quantityCart, setQuantityCart] = useState(0);
  const { data } = useAxios(`/products/${id}?filial=${2}`);
  api
    .get(
      `/cart/product?filial=1&clieCod=${sessionStorage.getItem(
        "codigo"
      )}&prodCodigo=${id}`
    )
    .then((response) => setQuantityCart(response.data.shift().PROD_QTD));
  const verificar = data?.product?.PROD_QTD_ATUAL - quantityCart;

  return (
    <Container>
      <ImageDiv>
        <Link to={`/products/${id}`}>
          {image ? (
            <img
              id="img"
              src={`${process.env.REACT_APP_URL_IMG}/${image}`}
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
      {quantity > 0 && verificar > 0 ? (
        <ButtonBuy id={id} title="Adicionar ao carrinho" />
      ) : (
        <ButtonUnavailable />
      )}
    </Container>
  );
}

export default CardGrid;
