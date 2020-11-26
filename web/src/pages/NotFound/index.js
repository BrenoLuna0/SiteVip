import React from "react";

import { useAxios } from "../../hooks/useAxios";

import { Container, Suggestion } from "./styles";
import CardLoading from "../../components/CardLoading";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardGrid from "../../components/CardGrid";

function NotFound() {
  const filial = sessionStorage.getItem("filial");
  const { data } = useAxios(`/rand?filial=${filial === null ? 2 : filial}`);

  if (!data) {
    return (
      <>
        <Header />
        <Container>
          <div className="container-interno">
            <img src="/empty_folder.png" alt="404 não encontrado" />
            <div className="infos">
              <h3>Não conseguimos encontrar o que você procurou.</h3>
              <p>Coisas que podem ter acontencido:</p>
              <ul>
                <li>O que você procura não esta mais no ar.</li>
                <li>Você digitou o endereço errado.</li>
              </ul>
            </div>
          </div>
        </Container>
        <Suggestion>
          <h2>Produtos que talvez você goste:</h2>
          <div className="grid">
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </div>
        </Suggestion>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <div className="container-interno">
          <img src="/empty_folder.png" alt="404 não encontrado" />
          <div className="infos">
            <h3>Não conseguimos encontrar o que você procurou.</h3>
            <p>Coisas que podem ter acontencido:</p>
            <ul>
              <li>O que você procura não esta mais no ar.</li>
              <li>Você digitou o endereço errado.</li>
            </ul>
          </div>
        </div>
      </Container>
      <Suggestion>
        <h2>Produtos que talvez você goste:</h2>
        <div className="grid">
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
        </div>
      </Suggestion>
      <Footer />
    </>
  );
}

export default NotFound;
