import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  ContainerBody,
  ImgDiv,
  ProductName,
  BuyContainer,
} from "./styles";
import ButtonBuy from "../ButtonBuy";
import ButtonUnavailable from "../ButtonUnavailable";

import { useAxios } from "../../hooks/useAxios";

import api from "../../services/api";

function ProductResult({ name, picture, quantity, id, price }) {
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
  console.log(verificar);
  return (
    <ContainerBody>
      <Container>
        <ImgDiv>
          <Link to={`/products/${id}`}>
            {picture ? (
              <img
                id="img"
                src={`${process.env.REACT_APP_URL_IMG}/${picture}`}
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
        </ImgDiv>

        <ProductName>
          <Link to={`/products/${id}`}>
            <p>{name}</p>
          </Link>
        </ProductName>

        <BuyContainer>
          <p>{price}</p>
          {quantity > 0 ? (
            <ButtonBuy id={id} title="Adicionar ao carrinho" />
          ) : (
            <ButtonUnavailable />
          )}
        </BuyContainer>
      </Container>
    </ContainerBody>
  );
}

export default ProductResult;
