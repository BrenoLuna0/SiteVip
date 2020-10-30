import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { mutate as mutateGlobal } from "swr";
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
import Loading from "../../components/Loading";

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
        mutate();
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao remover produto!");
      });
  }

  async function handleEdit(prodCodigo, value) {
    api
      .put(
        `/cart/${sessionStorage.getItem("filial")}/${sessionStorage.getItem(
          "codigo"
        )}/${prodCodigo}`,
        {
          prodQtd: value,
        }
      )
      .catch((err) => console.log(err));

    const cartEdited = data?.products?.map((product) => {
      if (product.PROD_CODIGO === prodCodigo) {
        return { ...product, PROD_QTD: value };
      }
      return product;
    });
    console.log(cartEdited);
    mutate(cartEdited, false);
    mutateGlobal();
  }

  let sub = 0;
  const aux = data?.products?.map((product) => {
    sub += product.PROD_PRECO_VENDA * product.PROD_QTD;
    return sub;
  });

  if (!data) {
    return (
      <>
        <Header />
        <Loading />
        <Footer />
      </>
    );
  }
  if (error?.status === 404) {
    return <CartEmpty />;
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
                        {data.PROD_IMAG[0] === undefined ? (
                          <img
                            src={
                              process.env.PUBLIC_URL + "/images/no-image.png"
                            }
                            alt={data.PROD_DESCRICAO.slice(0, 18)}
                          />
                        ) : (
                          <img
                            src={`http://187.84.80.162:8082/imagens/${data.PROD_IMAG[0].PROD_IMAG_NOME}`}
                            alt={data.PROD_DESCRICAO.slice(0, 18)}
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
                      {data.PROD_IMAG[0] === undefined ? (
                        <img
                          src={process.env.PUBLIC_URL + "/images/no-image.png"}
                          alt={data.PROD_DESCRICAO.slice(0, 18)}
                        />
                      ) : (
                        <img
                          src={`http://187.84.80.162:8082/imagens/${data.PROD_IMAG[0].PROD_IMAG_NOME}`}
                          alt={data.PROD_DESCRICAO.slice(0, 18)}
                        />
                      )}
                      <p className="name-product">{data.PROD_DESCRICAO}</p>
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
                <p>Continuar Pedido</p>
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
