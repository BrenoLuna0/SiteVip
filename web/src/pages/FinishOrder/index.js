import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Skeleton from "@material-ui/lab/Skeleton";

import { FaShoppingCart } from "react-icons/fa";
import { Container, Finish, Payments, SelectPayment } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalDetails from "../../components/ModalDetails";
import InputMask from "../../components/InputMask";

import { useAxios } from "../../hooks/useAxios";
import api from "../../services/api";

function FinishOrder() {
  const { register, handleSubmit } = useForm();
  const [payment, setPayment] = useState("");
  const [paymentInstallments, setPaymentInstallments] = useState(1);
  const [dinheiro, setDinheiro] = useState(false);
  const [duplicata, setDuplicata] = useState(false);
  const [qtdMetodoPagamento, setQtdMetodoPagamento] = useState(["DINHEIRO"]);

  const { data } = useAxios(
    `/cart?filial=${sessionStorage.getItem(
      "filial"
    )}&codigo=${sessionStorage.getItem("codigo")}`
  );

  let sub = 0;
  const aux = data?.products?.map((product) => {
    sub += product.PROD_PRECO_VENDA * product.PROD_QTD;
    return sub;
  });

  let totalParcelasDuplicata = [];
  for (let i = 0; i < data?.parcelas[1].FORM_PAGT_NUM_PARCELA; i++) {
    totalParcelasDuplicata.push(i + 1);
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  async function handleSend(e) {
    e.preventDefault();
    let formPagtCodigo, quantidadeParcelas, pagoEmCadaParcela;

    if (qtdMetodoPagamento === 2) {
      formPagtCodigo = { duplicata: 18, dinheiro: 11 };
      quantidadeParcelas = { diplicata: paymentInstallments, dinheiro: 1 };
      pagoEmCadaParcela = {
        duplicata: parseFloat(duplicata),
        dinheiro: parseFloat(dinheiro),
        total: sub,
      };
    }
    if (qtdMetodoPagamento === 1) {
      formPagtCodigo = payment === "DUPLICATA" ? 18 : 11;
      quantidadeParcelas = paymentInstallments;
      pagoEmCadaParcela = {
        total: sub,
      };
    }

    const object = {
      clieCpfCnpj: sessionStorage.getItem("cpfCnpj"),
      filial: sessionStorage.getItem("filial"),
      codigo: sessionStorage.getItem("codigo"),
      quantidadeDePagamentos: qtdMetodoPagamento,
      qtdMetodoPagamento,
      formPagtCodigo,
      parcelas: quantidadeParcelas,
      total: pagoEmCadaParcela,
      intervalo: "TESTE NAO FATURAR!",
      itens: data.products,
    };
    // const returning = await api.post("/checkout", object);
    //window.location.href = `/order/${returning.data.davCode}`;
  }

  if (!data) {
    return (
      <>
        <Header />
        <Container>
          <div className="all-products">
            <h3>Resumo dos produtos</h3>
            <div>
              <p>
                <Skeleton width={350} height={50} />
              </p>
              <p>
                <Skeleton width={100} height={50} />
              </p>
            </div>
          </div>

          <div className="button-buy-footer">
            <Link to="/finalizar-pedido">
              <Finish>
                <p>Finalizar Pedido</p>
                <span>
                  <FaShoppingCart />
                </span>
              </Finish>
            </Link>
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
        <div className="all-products">
          <h3>Resumo dos produtos</h3>
          <div>
            <div>
              {data?.products?.length > 1 ? (
                <p>{data?.products?.length} produtos</p>
              ) : (
                <p>{data?.products?.length} produto</p>
              )}

              <ModalDetails produtos={data?.products} />
            </div>

            <p>
              {sub.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>
        <Payments>
          <div className="formas-de-pagamento">
            <h2>Formas de Pagamento</h2>
            <button
              className="add-payment"
              onClick={() => {
                if (qtdMetodoPagamento[1] === undefined) {
                  setQtdMetodoPagamento(
                    qtdMetodoPagamento.concat(["DUPLICATA"])
                  );
                }
              }}
            >
              Adicionar outra forma de pagamento
            </button>
          </div>

          {qtdMetodoPagamento?.map((method, index) => (
            <>
              <SelectPayment>
                <select name="payment" onChange={() => onSubmit()}>
                  <option value="" selected disabled>
                    Selecione uma forma de pagamento
                  </option>
                  <option value="DINHEIRO" ref={register}>
                    DINHEIRO
                  </option>
                  <option value="DUPLICATA" ref={register}>
                    DUPLICATA
                  </option>
                </select>
                {qtdMetodoPagamento[index] === "DUPLICATA" && (
                  <select>
                    <option value="" selected disabled>
                      Parcelas
                    </option>
                    {totalParcelasDuplicata.map((parcela) => (
                      <option value="">{parcela}</option>
                    ))}
                  </select>
                )}
                {qtdMetodoPagamento[index] === "DUPLICATA" && (
                  <select>
                    <option value="" selected disabled>
                      Intervalo dias
                    </option>
                  </select>
                )}
                <InputMask maxValue={sub} />
              </SelectPayment>
            </>
          ))}
        </Payments>
        <div className="button-buy-footer">
          <Link to="/finalizar-pedido" onClick={(e) => handleSend(e)}>
            <Finish>
              <p>Finalizar Pedido</p>
              <span>
                <FaShoppingCart />
              </span>
            </Finish>
          </Link>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default FinishOrder;
