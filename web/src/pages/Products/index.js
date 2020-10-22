import React, { useState } from "react";
import Pagination from "@material-ui/lab/Pagination";
import { useForm } from "react-hook-form";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductResult from "../../components/ProductResult";
import Loading from "../../components/Loading";

import { Container, FormSelect } from "./styles";

import { useAxios } from "../../hooks/useAxios";

function Products({ location }) {
  const query = new URLSearchParams(location.search);

  const categories = query.get("category") || "";
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("SIAC_TS.VW_PRODUTO.PROD_DESCRICAO");
  const [orderType, setOrderType] = useState("asc");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    let test = data.orderProducts.split(" ");
    if (test[0] == "valor") {
      setOrderBy("SIAC_TS.VW_PRODUTO.PROD_PRECO_VENDA");
      test[1] == "desc" ? setOrderType("desc") : setOrderType("asc");
    } else {
      setOrderBy("SIAC_TS.VW_PRODUTO.PROD_DESCRICAO");
      setOrderType("asc");
    }
  };

  const { data } = useAxios(
    `/products/category?filial=${sessionStorage.getItem(
      "filial"
    )}&category=${categories}&page=${page}&order=${orderBy}&type=${orderType}`
  );
  console.log(data);
  function handleChange(event, value) {
    setPage(value);
  }

  if (!data) {
    return (
      <>
        <Header />
        <Container>
          <div className="title-results">
            <div>
              <h1>{categories}</h1>
              <p>({data?.count} items)</p>
            </div>
            <FormSelect onChange={handleSubmit(onSubmit)}>
              <select name="order-products">
                <option value="30">Ordem alfabética </option>
                <option value="10" selected>
                  Maior valor
                </option>
                <option value="15">Menor valor</option>
              </select>
              <select name="quantity-products">
                <option value="10" selected>
                  10 itens por página
                </option>
                <option value="15">15 itens por página</option>
                <option value="30">30 itens por página</option>
              </select>
            </FormSelect>
          </div>
          <Loading />
          <div className="root-data-fetch">
            <Pagination
              count={data?.pages}
              page={page}
              onChange={handleChange}
            />
          </div>
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
          <div>
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
        <div className="root">
          <Pagination count={data?.pages} page={page} onChange={handleChange} />
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Products;
