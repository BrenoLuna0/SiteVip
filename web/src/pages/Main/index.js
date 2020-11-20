import React from "react";
import { Link } from "react-router-dom";
import { FaCreditCard, FaCalendarAlt, FaClock } from "react-icons/fa";

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
  ContainerDetailsVip,
} from "./styles.js";

function Main() {
  const { data } = useAxios(`/rand?filial=2`);

  if (!data) {
    return (
      <>
        <Header />
        <ContainerBody>
          <Container>
            <Carousel>
              <Carousel.Item>
                <Link to="/products/22957">
                  <img src="/images/headset-fortrek.png" alt="" />
                </Link>
              </Carousel.Item>
              <Carousel.Item>
                <Link to="/products/22932">
                  <img src="/images/banner-cadeiras.png" alt="" />
                </Link>
              </Carousel.Item>
              <Carousel.Item>
                <Link to="/pesquisar/IMPRESSORA%20EPSON" className="img-flex">
                  <img src="/images/impressora-epson.png" alt="" />
                </Link>
              </Carousel.Item>
            </Carousel>
          </Container>
          <ContainerDetailsVip>
            <div>
              <FaCalendarAlt size={48} color="#171d4b" />
              <span>
                <h4>Desde 2012</h4>
                <p>no mercado</p>
              </span>
            </div>

            <div>
              <FaCreditCard size={48} color="#171d4b" />
              <span>
                <h4>Dividimos em até 10x</h4>
                <p>em cartões</p>
              </span>
            </div>
            <div>
              <FaClock size={48} color="#171d4b" />
              <span>
                <h4>Atendimento</h4>
                <p>Seg. a Sex. das 8h às 18h</p>
                <p>Sáb. das 8h às 12h</p>
              </span>
            </div>
          </ContainerDetailsVip>
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
              <Link to="/products/22957" className="img-flex">
                <img src="/images/headset-fortrek.png" alt="" />
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Link to="/products/22932" className="img-flex">
                <img src="/images/banner-cadeiras.png" alt="" />
              </Link>
            </Carousel.Item>
            <Carousel.Item>
              <Link to="/pesquisar/IMPRESSORA%20EPSON" className="img-flex">
                <img src="/images/impressora-epson.png" alt="" />
              </Link>
            </Carousel.Item>
          </Carousel>
        </Container>

        <ContainerDetailsVip>
          <div>
            <FaCalendarAlt size={48} color="#171d4b" />
            <span>
              <h4>Desde 2012</h4>
              <p>no mercado</p>
            </span>
          </div>
          <div>
            <FaCreditCard size={48} color="#171d4b" />
            <span>
              <h4>Dividimos em até 10x</h4>
              <p>em cartões</p>
            </span>
          </div>
          <div>
            <FaClock size={48} color="#171d4b" />
            <span>
              <h4>Atendimento</h4>
              <p>Seg. a Sex. das 8h às 18h</p>
              <p>Sáb. das 8h às 12h</p>
            </span>
          </div>
        </ContainerDetailsVip>

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
