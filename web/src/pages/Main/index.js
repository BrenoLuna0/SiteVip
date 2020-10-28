import React from "react";
import { Link } from "react-router-dom";

import { Carousel } from "react-bootstrap";
import { useAxios } from "../../hooks/useAxios";

import Header from "../../components/Header";
import CardGrid from "../../components/CardGrid";
import Footer from "../../components/Footer";
import CardLoading from "../../components/CardLoading";

import {
  Container,
  GridContainerProducts,
  EffectText,
  ContainerBody,
  ImgPropaganda,
} from "./styles.js";

function Main() {
  const { data } = useAxios(
    `/rand?filial=${sessionStorage.getItem("filial")}`,
    {
      headers: { "x-access-token": sessionStorage.getItem("token") },
    },
    { revalidateOnFocus: false }
  );

  if (!data) {
    return (
      <>
        <Header />
        <ContainerBody>
          <Container>
            <Carousel>
              <Carousel.Item>
                <img src="laptop.jpg" alt="Multilaser Xpad" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="tv.jpg" alt="Multilaser Escova Eletrica" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="mobile-phone.jpg" alt="Monitor Acer 23.6pol" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="acessories.jpg" alt="OEX Cooler fan" />
              </Carousel.Item>
            </Carousel>
          </Container>

          <ImgPropaganda>
            <div>
              <Link to="/home">
                <img src="https://via.placeholder.com/500x220" alt="" />
              </Link>
            </div>

            <div className="two-images">
              <Link to="/home">
                <img src="https://via.placeholder.com/250x140" alt="" />
              </Link>
              <Link to="/home">
                <img src="https://via.placeholder.com/250x140" alt="" />
              </Link>
            </div>
          </ImgPropaganda>
          <EffectText className="effect-text">
            <h1>As melhores ofertas</h1>
          </EffectText>
          <GridContainerProducts>
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </GridContainerProducts>
        </ContainerBody>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ContainerBody>
        <Container>
          <Carousel>
            <Carousel.Item>
              <img src="laptop.jpg" alt="Multilaser Xpad" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="tv.jpg" alt="Multilaser Escova Eletrica" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="mobile-phone.jpg" alt="Monitor Acer 23.6pol" />
            </Carousel.Item>
            <Carousel.Item>
              <img src="acessories.jpg" alt="OEX Cooler fan" />
            </Carousel.Item>
          </Carousel>
        </Container>

        <ImgPropaganda>
          <div>
            <Link to="/home">
              <img src="https://via.placeholder.com/500x220" alt="" />
            </Link>
          </div>

          <div className="two-images">
            <Link to="/home">
              <img src="https://via.placeholder.com/250x140" alt="" />
            </Link>
            <Link to="/home">
              <img src="https://via.placeholder.com/250x140" alt="" />
            </Link>
          </div>
        </ImgPropaganda>
        <EffectText className="effect-text">
          <h1>As melhores ofertas</h1>
        </EffectText>
        <GridContainerProducts>
          {data?.map((product) => {
            return (
              <CardGrid
                name={product.PROD_DESCRICAO}
                price={product.PROD_PRECO_VENDA}
                id={product.PROD_CODIGO}
                key={product.PROD_CODIGO}
                image={product.PROD_IMAG_NOME}
                quantity={product.PROD_QTD_ATUAL}
              />
            );
          })}
        </GridContainerProducts>
      </ContainerBody>
      <Footer />
    </>
  );
}

export default Main;
