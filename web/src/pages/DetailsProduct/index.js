import React, { useState } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { useParams } from "react-router-dom";
import {
  DetailsProducts,
  ContainerProduct,
  RelatedProducts,
  Container,
} from "./styles";

import ProductUnavailable from "../../components/ProductUnavailable";
import ProductDisp from "../../components/ProductDisp";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ButtonBuy from "../../components/ButtonBuy";
import ButtonUnavailable from "../../components/ButtonUnavailable";
import CardLoading from "../../components/CardLoading";
import ProductNotFound from "../../components/ProductNotFound";

import CardGrid from "../../components/CardGrid";

import { useAxios } from "../../hooks/useAxios";

import api from "../../services/api";

function Detail() {
  const [quantityCart, setQuantityCart] = useState(0);
  const { prodCodigo } = useParams();

  const { data, error } = useAxios(`/products/${prodCodigo}?filial=${2}`, {
    revalidateOnFocus: false,
  });

  api
    .get(
      `/cart/product?filial=1&clieCod=${sessionStorage.getItem(
        "codigo"
      )}&prodCodigo=${prodCodigo}`
    )
    .then((response) => setQuantityCart(response.data.shift().PROD_QTD));

  const verificar = data?.product?.PROD_QTD_ATUAL - quantityCart;
  console.log(verificar);
  if (error) {
    return (
      <>
        <Header />
        <ProductNotFound />
        <Footer />
      </>
    );
  }

  if (!data) {
    return (
      <>
        <Header />
        <Container>
          <ContainerProduct>
            <div className="loading-container">
              <Skeleton
                variant="rect"
                width={280}
                height={280}
                animation="wave"
                className="loading-img-responsive"
              />
            </div>

            <DetailsProducts>
              <h1>
                <Skeleton
                  variant="text"
                  width={"80%"}
                  height={80}
                  animation="wave"
                />
              </h1>
              <div>
                <div className="price">
                  <Skeleton
                    variant="text"
                    width={250}
                    height={80}
                    animation="wave"
                  />
                </div>

                <div className="loading-button-buy">
                  <Skeleton
                    variant="text"
                    width={180}
                    height={80}
                    animation="wave"
                  />
                </div>
              </div>
            </DetailsProducts>
          </ContainerProduct>

          <RelatedProducts>
            <h1>Produtos relacionados</h1>
            <div className="layout-grid">
              <CardLoading></CardLoading>
              <CardLoading></CardLoading>
              <CardLoading></CardLoading>
              <CardLoading></CardLoading>
            </div>
          </RelatedProducts>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <ContainerProduct>
          <div className="img-container">
            {data?.product?.PROD_IMAG[0] ? (
              <img
                id="img"
                src={`${process.env.REACT_APP_URL_IMG}/${data?.product?.PROD_IMAG[0].PROD_IMAG_NOME}`}
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
          </div>

          <DetailsProducts>
            <h1>{data?.product?.PROD_DESCRICAO}</h1>
            <div>
              {data?.product?.PROD_QTD_ATUAL > 0 && <ProductDisp />}

              {data?.product?.PROD_QTD_ATUAL === 0 && <ProductUnavailable />}

              <div className="price">
                {data?.product?.PROD_PRECO_VENDA?.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
                {data?.product?.PROD_PRECO_VENDA >= 100 && (
                  <p>
                    Ou até em 10x de
                    {(data?.product?.PROD_PRECO_VENDA / 10).toLocaleString(
                      "pt-br",
                      {
                        style: "currency",
                        currency: "BRL",
                      }
                    )}{" "}
                    no cartão
                  </p>
                )}
              </div>

              <div className="buy-button">
                {data?.product?.PROD_QTD_ATUAL > 0 && verificar > 1 ? (
                  <ButtonBuy
                    id={data?.product.PROD_CODIGO}
                    title="Adicionar ao carrinho"
                  />
                ) : (
                  <ButtonUnavailable />
                )}
              </div>
            </div>
          </DetailsProducts>
        </ContainerProduct>

        <RelatedProducts>
          <h1>Produtos relacionados</h1>
          <div className="layout-grid">
            {data?.relatedProducts?.map((relatedProduct) => {
              return (
                <CardGrid
                  key={relatedProduct.PROD_CODIGO}
                  id={relatedProduct.PROD_CODIGO}
                  name={relatedProduct.PROD_DESCRICAO}
                  price={relatedProduct.PROD_PRECO_VENDA}
                  image={relatedProduct.PROD_IMAG_NOME}
                  quantity={relatedProduct.PROD_QTD_ATUAL}
                />
              );
            })}
          </div>
        </RelatedProducts>
      </Container>
      <Footer />
    </>
  );
}

export default Detail;
