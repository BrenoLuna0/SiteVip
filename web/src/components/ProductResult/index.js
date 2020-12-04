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

function ProductResult({ name, picture, quantity, id, price }) {
  const { data } = useAxios(
    `/cartItem?filial=${sessionStorage.getItem(
      "filial"
    )}&codigo=${sessionStorage.getItem("codigo")}&prodCodigo=${id}`
  );
  console.log(data.results[0].PROD_QTD, data.produto.PROD_QTD_ATUAL);
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
          {quantity > 0 ||
          data.results[0].PROD_QTD < data.produto.PROD_QTD_ATUAL ? (
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
