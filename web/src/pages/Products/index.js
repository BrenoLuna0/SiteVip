import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import { useForm } from "react-hook-form";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductResult from "../../components/ProductResult";
import ProductResultLoading from "../../components/ProductResultLoading";

import { Container, FormSelect, ContainerProducts, Wrapper } from "./styles";

import { useAxios } from "../../hooks/useAxios";

function Products(props) {
  const params = new URLSearchParams(props.location.search);
  let pages = params.get("page");
  const categories = params.get("category");
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

  const { data } = useAxios(
    `/products/category?filial=${2}&category=${categories}&page=${page}&order=${orderBy}&type=${orderType}`
  );

  if (!data) {
    return (
      <>
        <Header />
        <Container>
          <div className="title-results">
            <div className="categorias">
              <h1>{categories}</h1>
            </div>
            <FormSelect onChange={handleSubmit(onSubmit)}>
              <select name="order-products">
                <option value="30">Ordem alfabética </option>
                <option value="10">Maior valor</option>
                <option value="15">Menor valor</option>
              </select>
            </FormSelect>
          </div>
          <ContainerProducts>
            <ProductResultLoading />
            <ProductResultLoading />
            <ProductResultLoading />
            <ProductResultLoading />
            <ProductResultLoading />
            <ProductResultLoading />
          </ContainerProducts>
        </Container>
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
            <h1>{categories}</h1>
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
        <ContainerProducts>
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
        </ContainerProducts>
        <Wrapper>
          <ReactPaginate
            containerClassName="pagination-container"
            pageCount={data.pages}
            initialPage={page - 1}
            previousLabel="<"
            nextLabel=">"
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            disableInitialCallback={true}
            onPageChange={(value, event) => {
              const pageValue = value.selected + 1;
              pages = pageValue;
              window.location.href = `/products?category=${categories}&page=${pages}`;
              setPage(pageValue);
            }}
          />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}

export default Products;
