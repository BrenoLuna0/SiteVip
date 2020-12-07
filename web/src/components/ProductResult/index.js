import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
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

  if (!data) {
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
            <Skeleton variant="rect" width={206} height={50} />
          </BuyContainer>
        </Container>
      </ContainerBody>
    );
  }

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
          {(quantity === 0 ||
            data?.results[0]?.PROD_QTD === data?.produto?.PROD_QTD_ATUAL) &&
          data ? (
            <ButtonUnavailable />
          ) : (
            <ButtonBuy id={id} title="Adicionar ao carrinho" />
          )}
        </BuyContainer>
      </Container>
    </ContainerBody>
  );
}

export default ProductResult;
