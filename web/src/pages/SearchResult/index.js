import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";

import { Container, NoResult, FormSelect } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import Pagination from "../../components/Pagination";
import ProductResult from "../../components/ProductResult";

function SearchResult() {
  const [page, setPage] = useState(1);
  const { name } = useParams();
  const [orderBy, setOrderBy] = useState("SIAC_TS.VW_PRODUTO.PROD_DESCRICAO");
  const [orderType, setOrderType] = useState("asc");
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    let test = data.orderProducts.split(" ");
    if (test[0] === "valor") {
      setOrderBy("SIAC_TS.VW_PRODUTO.PROD_PRECO_VENDA");
      test[1] === "desc" ? setOrderType("desc") : setOrderType("asc");
    } else {
      setOrderBy("SIAC_TS.VW_PRODUTO.PROD_DESCRICAO");
      setOrderType("asc");
    }
  };

  const { data } = useAxios(
    `/search?filial=${sessionStorage.getItem(
      "filial"
    )}&name=${name.toUpperCase()}&page=${page}&order=${orderBy}&type=${orderType}`,
    {
      headers: { "x-access-token": sessionStorage.getItem("token") },
    }
  );

  if (!data) {
    return (
      <>
        <Header />
        <Container>
          <div className="title-results">
            <div className="categorias">
              <h1>Resultados para '{name}'</h1>
              <p>({data?.count} items)</p>
            </div>

            <FormSelect onChange={handleSubmit(onSubmit)}>
              <select name="orderProducts" ref={register}>
                <option value="alfabeto asc" selected>
                  Ordem alfabética
                </option>
                <option value="valor desc">Maior valor</option>
                <option value="valor asc">Menor valor</option>
              </select>
              <select name="quantityProducts" ref={register}>
                <option value="10" selected>
                  10 itens por página
                </option>
                <option value="15">15 itens por página</option>
                <option value="30">30 itens por página</option>
              </select>
            </FormSelect>
          </div>

          <Loading />
        </Container>
        <Footer />
      </>
    );
  }
  if (data.count === 0) {
    return (
      <>
        <Header />
        <NoResult>
          <div className="no-results">
            <h1>Não encontramos resultados para '{name}' :(</h1>
          </div>
        </NoResult>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header />
      <Container>
        <div className="title-results">
          <div className="categorias">
            <h1>Resultados para '{name}'</h1>
            <p>({data?.count} items)</p>
          </div>

          <FormSelect onChange={handleSubmit(onSubmit)}>
            <select name="orderProducts" ref={register}>
              <option value="alfabeto asc" selected>
                Ordem alfabética
              </option>
              <option value="valor desc">Maior valor</option>
              <option value="valor asc">Menor valor</option>
            </select>
            <select name="quantityProducts" ref={register}>
              <option value="10" selected>
                10 itens por página
              </option>
              <option value="15">15 itens por página</option>
              <option value="30">30 itens por página</option>
            </select>
          </FormSelect>
        </div>
        <div>
          {data?.result.map((product) => (
            <ProductResult
              name={product.PROD_DESCRICAO}
              picture={product.PROD_IMAG_NOME}
              quantity={product.PROD_QTD_ATUAL}
              id={product.PROD_CODIGO}
              price={product.PROD_PRECO_VENDA.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            />
          ))}
        </div>
        <Pagination pages={data?.pages} activePage={page} onChange={setPage} />
      </Container>
      <Footer />
    </>
  );
}

export default SearchResult;
