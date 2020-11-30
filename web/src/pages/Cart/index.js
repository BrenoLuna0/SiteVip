import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import RemoveArrayItem from "../../utils/RemoveArrayItem";
import "react-toastify/dist/ReactToastify.css";

import { FaWindowClose, FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import {
  Container,
  ContainerAll,
  ContainerProducts,
  Grid,
  CartMobile,
  ContainerSub,
  DivFooter,
  Finish,
} from "./styles";

import { useAxios } from "../../hooks/useAxios";
import api from "../../services/api";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CartEmpty from "../../components/CartEmpty";
import RowCartLoading from "../../components/RowCartLoading";
import RowCartMobileLoading from "../../components/RowCartLoading";

function Cart() {
  const { data, error, mutate } = useAxios(
    `/cart?filial=${sessionStorage.getItem(
      "filial"
    )}&codigo=${sessionStorage.getItem("codigo")}`,
    { headers: { "x-access-token": sessionStorage.getItem("token") } },
    {
      revalidateOnFocus: false,
    }
  );
  const toastId = React.useRef(null);

  async function handleDelete(prodCodigo) {
    const cartDeleted = RemoveArrayItem(
      data?.products,
      {
        PROD_CODIGO: prodCodigo,
      },
      "PROD_CODIGO"
    );
    mutate({ ...data, products: cartDeleted }, false);

    await api
      .delete(
        `/cart/${sessionStorage.getItem("filial")}/${sessionStorage.getItem(
          "codigo"
        )}/${prodCodigo}`
      )
      .then(() => {
        if (!toast.isActive(toastId.current)) {
          toast.error("Produto removido com sucesso!", {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            hideProgressBar: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        alert("Erro ao remover produto!");
      });

    mutate();
  }

  async function handleEdit(prodCodigo, value) {
    const cartEdited = data?.products?.map((product) => {
      if (product.PROD_CODIGO === prodCodigo) {
        return { ...product, PROD_QTD: value };
      }
      return product;
    });

    mutate({ ...data, products: cartEdited }, false);

    await api.put(
      `/cart/${sessionStorage.getItem("filial")}/${sessionStorage.getItem(
        "codigo"
      )}/${prodCodigo}`,
      {
        prodQtd: value,
      }
    );

    mutate();
  }

  let sub = 0;
  const aux = data?.products?.map((product) => {
    sub += product.PROD_PRECO_VENDA * product.PROD_QTD;
    return sub;
  });
  if (error) {
    return <CartEmpty />;
  }

  if (!data) {
    return (
      <>
        <Header />
        <ContainerAll>
          <Container>
            <Grid width="100%">
              <thead>
                <tr>
                  <th width="50%">Produtos</th>
                  <th>Valor Unitário</th>
                  <th className="quantity-name">Quantidade</th>
                  <th>Subtotal</th>
                  <th>Excluir</th>
                </tr>
              </thead>
              <tbody>
                <RowCartLoading />
                <RowCartLoading />
                <RowCartLoading />
                <RowCartLoading />
              </tbody>
            </Grid>

            <CartMobile>
              <div className="item-title">
                <h1>Item</h1>
                <div className="product">
                  <RowCartMobileLoading />
                  <RowCartMobileLoading />
                  <RowCartMobileLoading />
                  <RowCartMobileLoading />
                </div>
              </div>
            </CartMobile>
          </Container>
        </ContainerAll>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <ContainerAll>
        <Container>
          <Grid width="100%">
            <thead>
              <tr>
                <th width="50%">Produtos</th>
                <th>Valor Unitário</th>
                <th className="quantity-name">Quantidade</th>
                <th>Subtotal</th>
                <th>Excluir</th>
              </tr>
            </thead>

            <tbody>
              {data?.products?.map((data, index) => {
                return (
                  <ContainerProducts>
                    <td width="50%" className="product-container">
                      <Link to={`/products/${data.PROD_CODIGO}`}>
                        {data.PROD_IMAG.length > 0 ? (
                          <img
                            id="img"
                            src={`${process.env.REACT_APP_URL_IMG}/${data.PROD_IMAG[0].PROD_IMAG_NOME}`}
                            alt="produto"
                            className="image"
                          />
                        ) : (
                          <img
                            id="img"
                            src={
                              process.env.PUBLIC_URL + "/images/no-image.png"
                            }
                            alt="produto"
                            className="image"
                          />
                        )}
                        <p className="name-product">{data.PROD_DESCRICAO}</p>
                      </Link>
                      <Link to={`/products/${data.PROD_CODIGO}`}></Link>
                    </td>
                    <td>
                      <p>
                        {data.PROD_PRECO_VENDA.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </td>
                    <td align="center" className="center-product">
                      <div className="counter-product">
                        <span>
                          {data.PROD_QTD > 1 && (
                            <FaMinus
                              size={14}
                              onClick={() =>
                                handleEdit(data.PROD_CODIGO, data.PROD_QTD - 1)
                              }
                            />
                          )}

                          {data.PROD_QTD === 1 && (
                            <FaMinus size={14} className="not-available" />
                          )}
                        </span>
                        <p>{data.PROD_QTD}</p>

                        <span>
                          {data.PROD_QTD + 1 > data.PROD_QTD_ATUAL && (
                            <FaPlus size={14} className="not-available" />
                          )}
                          {data.PROD_QTD + 1 <= data.PROD_QTD_ATUAL && (
                            <FaPlus
                              size={14}
                              onClick={() =>
                                handleEdit(data.PROD_CODIGO, data.PROD_QTD + 1)
                              }
                            />
                          )}
                        </span>
                      </div>
                    </td>
                    <td>
                      <p>
                        {(data.PROD_QTD * data.PROD_PRECO_VENDA).toLocaleString(
                          "pt-br",
                          {
                            style: "currency",
                            currency: "BRL",
                          }
                        )}
                      </p>
                    </td>
                    <td>
                      <FaWindowClose
                        color="red"
                        size={18}
                        onClick={() => handleDelete(data.PROD_CODIGO)}
                      />
                    </td>
                  </ContainerProducts>
                );
              })}
            </tbody>
          </Grid>

          <CartMobile>
            <div className="item-title">
              <h1>Item</h1>
            </div>
            {data?.products?.map((data) => {
              return (
                <div className="product">
                  <div className="img">
                    <Link to={`/products/${data.PROD_CODIGO}`}>
                      {data.PROD_IMAG_NOME ? (
                        <img
                          id="img"
                          src={`${process.env.REACT_APP_URL_IMG}/${data.PROD_IMAG_NOME}`}
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
                  </div>
                  <div className="center">
                    <div className="unity">
                      <p>Preço: </p>
                      <p>
                        {data.PROD_PRECO_VENDA.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </p>
                    </div>
                    <div className="counter-product">
                      <span>
                        {data.PROD_QTD > 1 && (
                          <FaMinus
                            size={14}
                            onClick={() =>
                              handleEdit(data.PROD_CODIGO, data.PROD_QTD - 1)
                            }
                          />
                        )}

                        {data.PROD_QTD === 1 && (
                          <FaMinus size={14} className="not-available" />
                        )}
                      </span>
                      <p>{data.PROD_QTD}</p>
                      <span>
                        {data.PROD_QTD + 1 > data.PROD_QTD_ATUAL && (
                          <FaPlus size={14} className="not-available" />
                        )}
                        {data.PROD_QTD + 1 <= data.PROD_QTD_ATUAL && (
                          <FaPlus
                            size={14}
                            onClick={() =>
                              handleEdit(data.PROD_CODIGO, data.PROD_QTD + 1)
                            }
                          />
                        )}
                      </span>
                    </div>
                    <div className="subtotal">
                      <p>Subtotal: </p>
                      <p>
                        {(data.PROD_QTD * data.PROD_PRECO_VENDA).toLocaleString(
                          "pt-br",
                          {
                            style: "currency",
                            currency: "BRL",
                          }
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="remove">
                    <button onClick={() => handleDelete(data.PROD_CODIGO)}>
                      Remover do carrinho
                    </button>
                  </div>
                </div>
              );
            })}
          </CartMobile>

          <DivFooter>
            <ContainerSub>
              <div>
                <p>Subtotal: </p>
                <p>
                  {sub.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
              </div>
            </ContainerSub>
            <Link to="/finalizar-pedido">
              <Finish>
                <p>FINALIZAR PEDIDO</p>
                <span>
                  <FaShoppingCart />
                </span>
              </Finish>
            </Link>
          </DivFooter>
        </Container>
      </ContainerAll>

      <Footer />
    </>
  );
}

export default Cart;
