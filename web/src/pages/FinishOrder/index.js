import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Skeleton from "@material-ui/lab/Skeleton";
import CurrencyInput from "react-currency-input-field";

import { FaShoppingCart } from "react-icons/fa";
import { Container, SelectPayment, Payment, Finish } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { useAxios } from "../../hooks/useAxios";

function FinishOrder() {
  const { register, handleSubmit } = useForm();
  const [payment, setPayment] = useState("");
  const [paymentInstallments, setPaymentInstallments] = useState(1);
  const [onePayment, setOnePayment] = useState(true);
  const [multiPayment, setMultiPayment] = useState(false);
  const [dinheiro, setDinheiro] = useState();
  const [duplicata, setDuplicata] = useState();
  const [qtdMetodoPagamento, setQtdMetodoPagamento] = useState(1);

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
    if (data.pagamentoMetodo === "DINHEIRO") {
      setPaymentInstallments(1);
      setPayment(data.pagamentoMetodo);
    } else {
      setPaymentInstallments(data.parcelas);
      setPayment(data.pagamentoMetodo);
    }
  };

  function handleSend() {
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
      intervalo: "TESTE",
    };
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

          <SelectPayment>
            <div className="onePayment active">Um metódo de pagamento</div>
            <div className="multiPayment">Dois metódos de pagamento</div>
          </SelectPayment>
          <Payment>
            <section className="onepayment">
              <div>
                <h3>Formas de pagamento</h3>
                <select name="pagamentoMetodo">
                  <option selected disabled>
                    Selecione a forma de pagamento
                  </option>
                </select>
              </div>
              <div>
                <h3>Quantidade de Parcelas</h3>
                <select name="parcelas" required>
                  <option value="1" selected disabled>
                    Selecione a quantidade das parcelas
                  </option>
                </select>
              </div>
            </section>
          </Payment>
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

              <p>ver detalhes</p>
            </div>

            <p>
              {sub.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </p>
          </div>
        </div>

        <SelectPayment>
          <div
            className={`onePayment ${
              onePayment && !multiPayment ? "active" : ""
            }`}
            onClick={() => {
              setQtdMetodoPagamento(1);
              setOnePayment(true);
              setMultiPayment(false);
            }}
          >
            Um metódo de pagamento
          </div>
          <div
            className={`multiPayment ${
              multiPayment && !onePayment ? "active" : ""
            }`}
            onClick={() => {
              setQtdMetodoPagamento(2);
              setMultiPayment(true);
              setOnePayment(false);
            }}
          >
            Dois metódos de pagamento
          </div>
        </SelectPayment>

        <Payment>
          {onePayment && (
            <section className="onepayment">
              <div>
                <h3>Formas de pagamento</h3>
                <select
                  name="pagamentoMetodo"
                  ref={register}
                  onChange={handleSubmit(onSubmit)}
                  required
                >
                  <option selected disabled>
                    Selecione a forma de pagamento
                  </option>
                  {data?.parcelas?.map((parcela) => {
                    return (
                      <option
                        ref={register}
                        value={parcela.FORM_PAGT_DESCRICAO}
                      >
                        {parcela.FORM_PAGT_DESCRICAO}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <h3>Quantidade de Parcelas</h3>
                <select
                  name="parcelas"
                  ref={register}
                  onChange={handleSubmit(onSubmit)}
                  required
                >
                  <option selected disabled>
                    Selecione a quantidade das parcelas
                  </option>
                  {payment === "DINHEIRO" && (
                    <option value="1" selected>
                      1x
                    </option>
                  )}
                  {payment === "DUPLICATA" &&
                    totalParcelasDuplicata.map((parcela) => {
                      return <option value={parcela}>{parcela}x</option>;
                    })}
                </select>
              </div>
            </section>
          )}

          {multiPayment && (
            <section className="multipayment">
              <div>
                <div>
                  <h3>Primeira forma de pagamento</h3>
                  <select
                    name="pagamentoMetodo"
                    ref={register}
                    onChange={handleSubmit(onSubmit)}
                  >
                    <option selected value="DINHEIRO">
                      DINHEIRO
                    </option>
                  </select>
                </div>
                <div>
                  <h3>Valor a ser pago em dinheiro</h3>
                  <CurrencyInput
                    required
                    name="dinheiro"
                    prefix="R$ "
                    placeholder="R$ 0,00"
                    decimalSeparator=","
                    groupSeparator="."
                    allowDecimals={true}
                    decimalsLimit={2}
                    precision={2}
                    allowNegativeValue={false}
                    value={dinheiro}
                    onChange={(value) => {
                      const valueFloat = parseFloat(value);
                      let decimal = sub - valueFloat;
                      decimal = decimal.toFixed(2);
                      if (valueFloat > duplicata) {
                        setDuplicata(0);
                      }
                      if (valueFloat < sub) {
                        setDinheiro(valueFloat);
                        setDuplicata(decimal);
                      }
                      if (value === sub) {
                        setDuplicata(0);
                        setDinheiro(sub);
                      }
                    }}
                  />
                </div>
                <div>
                  <h3>Quantidade de Parcelas</h3>
                  <select
                    name="parcelas"
                    ref={register}
                    onChange={handleSubmit(onSubmit)}
                  >
                    <option value="1" selected disabled>
                      1x
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <div>
                  <h3>Primeira forma de pagamento</h3>
                  <select
                    name="pagamentoMetodo"
                    ref={register}
                    onChange={handleSubmit(onSubmit)}
                  >
                    <option selected value="DUPLICATA">
                      DUPLICATA
                    </option>
                  </select>
                </div>
                <div>
                  <h3>Valor a ser pago em duplicata</h3>
                  <CurrencyInput
                    name="duplicata"
                    prefix="R$ "
                    placeholder="R$ 0,00"
                    decimalSeparator=","
                    groupSeparator="."
                    allowDecimals={true}
                    decimalsLimit={2}
                    precision={2}
                    allowNegativeValue={false}
                    value={duplicata}
                    onChange={(value) => {
                      const valueFloat = parseFloat(value);
                      let decimal = sub - valueFloat;
                      decimal = decimal.toFixed(2);
                      if (valueFloat < sub) {
                        setDuplicata(valueFloat);
                        setDinheiro(decimal);
                      }
                      if (value === sub) {
                        setDinheiro(0);
                        setDuplicata(sub);
                      }
                    }}
                    required
                  />
                </div>
                <div>
                  <h3>Quantidade de Parcelas</h3>
                  <select
                    name="parcelas"
                    ref={register}
                    onChange={handleSubmit(onSubmit)}
                    required
                  >
                    {totalParcelasDuplicata.map((parcela) => {
                      return <option value={parcela}>{parcela}x</option>;
                    })}
                  </select>
                </div>
              </div>
            </section>
          )}
        </Payment>
        <div className="button-buy-footer">
          <Link to="/finalizar-pedido" onClick={handleSend}>
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
