import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ReactPaginate from "react-paginate";

import { Container, NoResult, FormSelect, Wrapper } from "./styles";

import { useAxios } from "../../hooks/useAxios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductResult from "../../components/ProductResult";
import ProductResultLoading from "../../components/ProductResultLoading";

function SearchResult(props) {
  const params = new URLSearchParams(props.location.search);
  let pages = params.get("page");
  const name = params.get("name");

  const [page, setPage] = useState(pages === null ? 1 : pages);
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

  const filial = sessionStorage.getItem("filial");

  const { data } = useAxios(
    `/search?filial=${
      filial === null ? 2 : filial
    }&name=${name.toUpperCase()}&page=${page}&order=${orderBy}&type=${orderType}`
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
            </FormSelect>
          </div>

          <div>
            <ProductResultLoading />
            <ProductResultLoading />
            <ProductResultLoading />
            <ProductResultLoading />
            <ProductResultLoading />
            <ProductResultLoading />
          </div>
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
        <Wrapper>
          <ReactPaginate
            containerClassName="pagination-container"
            pageCount={data?.pages}
            initialPage={page - 1}
            previousLabel="<"
            nextLabel=">"
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            disableInitialCallback={true}
            onPageChange={(value, event) => {
              const pageValue = value.selected + 1;
              pages = pageValue;
              window.location.href = `pesquisar?name=${name}&page=${pages}`;
              setPage(pageValue);
            }}
          />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}

export default SearchResult;
