import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Skeleton from "@material-ui/lab/Skeleton";
import { toast } from "react-toastify";
import IntlCurrencyInput from "react-intl-currency-input";

//estilos
import { FaShoppingCart, FaWindowClose } from "react-icons/fa";
import {
  Container,
  Finish,
  Payments,
  SelectPayment,
  TwoPayment,
  OnePayment,
} from "./styles";

//componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalDetails from "../../components/ModalDetails";

import { useAxios } from "../../hooks/useAxios";
import api from "../../services/api";

const currencyConfig = {
  locale: "pt-BR",
  formats: {
    number: {
      BRL: {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

function OrderFinish() {
  const { register, handleSubmit } = useForm();
  const [dinheiro, setDinheiro] = useState(false);
  const [duplicata, setDuplicata] = useState(false);
  const [dinheiroValor, setDinheiroValor] = useState(0.0);
  const [duplicataValor, setDuplicataValor] = useState(0.0);
  const [paymentInstallments, setPaymentInstallments] = useState(1);
  const [quantityPayment, setQuantityPayment] = useState([1]);
  const [codDayPaymentInstallment, setCodDayPaymentInstallment] = useState();
  const inputEl = useRef(0);

  const { data } = useAxios(
    `/cart?filial=${sessionStorage.getItem(
      "filial"
    )}&codigo=${sessionStorage.getItem("codigo")}`
  );

  const { data: allInstallments } = useAxios(
    `/showparcelas?diaParcelas=${paymentInstallments}`
  );

  let sub = 0;
  const aux = data?.products?.map((product) => {
    sub += product.PROD_PRECO_VENDA * product.PROD_QTD;
    return sub;
  });

  sub = parseFloat(sub.toFixed(2));
  let totalParcelasDuplicata = [];
  for (let i = 0; i < data?.parcelas[1].FORM_PAGT_NUM_PARCELA; i++) {
    totalParcelasDuplicata.push(i + 1);
  }

  let stringParcelas = [];
  let codParcelasDias = [];
  for (let i = 0; i < allInstallments?.length; i++) {
    stringParcelas.push(Object.values(allInstallments[i].dias).toString());
    codParcelasDias.push(allInstallments[i].parcelas.PARC_DIA_CODIGO);
  }

  const onSubmit = (data) => {
    if (data.firstPayment === "DINHEIRO") {
      setDinheiro(true);
      setDuplicata(false);
      setDinheiroValor(sub);
      setDuplicataValor(0);
      setPaymentInstallments(1);
      setCodDayPaymentInstallment("0");
    } else if (data.firstPayment === "DUPLICATA") {
      setDuplicata(true);
      setDinheiro(false);
      setDuplicataValor(sub);
      setDinheiroValor(0);
    }
    if (data.duplicataParcelas !== "") {
      setPaymentInstallments(parseInt(data.duplicataParcelas));
    }
    setCodDayPaymentInstallment(data.intarvaloDiasParcelas);
  };

  async function handleSendOrder(e) {
    e.preventDefault();
    let formPagtCodigo, quantidadeParcelas, pagoEmCadaParcela;
    console.log(dinheiroValor, duplicataValor);
    if (!duplicata && !dinheiro) {
      toast.error("Selecione uma forma de pagamento antes de continuar.", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (duplicata) {
      if (isNaN(paymentInstallments)) {
        toast.error("Confira as parcelas antes de continuar.", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      if (
        codDayPaymentInstallment === undefined ||
        codDayPaymentInstallment.length === 0
      ) {
        toast.error("Confira os dias das parcelas antes de continuar.", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
    }

    if (dinheiroValor + duplicataValor !== sub) {
      toast.error("Confira os valores antes de continuar.", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (quantityPayment.length === 2) {
      formPagtCodigo = { duplicata: 18, dinheiro: 11 };
      quantidadeParcelas = { diplicata: paymentInstallments, dinheiro: 1 };
      pagoEmCadaParcela = {
        duplicata: parseFloat(duplicataValor),
        dinheiro: parseFloat(dinheiroValor),
        total: sub,
      };
    }
    if (quantityPayment.length === 1) {
      formPagtCodigo = duplicata ? 18 : 11;
      quantidadeParcelas = paymentInstallments ? paymentInstallments : 1;
      pagoEmCadaParcela = {
        total: sub,
      };
    }

    const object = {
      clieCpfCnpj: sessionStorage.getItem("cpfCnpj"), //ok
      codigo: sessionStorage.getItem("codigo"), //ok
      filial: sessionStorage.getItem("filial"), //ok
      formPagtCodigo, //ok
      intervalo: "TESTE NAO FATURAR!", //ok
      quantidadeDePagamentos: quantityPayment.length, //ok
      qtdMetodoPagamento: quantityPayment.length, //ok duplicado
      parcelas: quantidadeParcelas, // ok
      total: pagoEmCadaParcela, //ok
      itens: data.products, //ok
      codIntervaloDias: codDayPaymentInstallment, //adicionar ao backend depois
    };

    //    const returning = await api.post("/checkout", object);
    //  window.location.href = `/order/${returning.data.davCode}`;
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
          <Payments>
            <div className="formas-de-pagamento">
              <h2>Formas de Pagamento</h2>
              <button className="add-payment">
                Adicionar outra forma de pagamento
              </button>
            </div>
            <SelectPayment>
              <OnePayment>
                <select
                  name="firstPayment"
                  ref={register}
                  onChange={handleSubmit(onSubmit)}
                >
                  <option value="" selected disabled>
                    Selecione uma forma de pagamento
                  </option>
                  <option value="DINHEIRO">DINHEIRO</option>
                  <option value="DUPLICATA">DUPLICATA</option>
                </select>
              </OnePayment>
            </SelectPayment>
          </Payments>
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
                if (quantityPayment < 2) {
                  setDinheiro(true);
                  setDuplicata(true);
                  setDinheiroValor(0);
                  setDuplicataValor(0);
                  setQuantityPayment(
                    quantityPayment.concat([...quantityPayment].pop() + 1)
                  );
                }
              }}
            >
              Adicionar outra forma de pagamento
            </button>
          </div>

          {quantityPayment.length === 1 && (
            <SelectPayment>
              <OnePayment>
                <select
                  name="firstPayment"
                  ref={register}
                  onChange={handleSubmit(onSubmit)}
                >
                  <option value="" selected disabled>
                    Selecione uma forma de pagamento
                  </option>
                  <option value="DINHEIRO">DINHEIRO</option>
                  <option value="DUPLICATA">DUPLICATA</option>
                </select>

                {duplicata && (
                  <>
                    <select
                      name="duplicataParcelas"
                      ref={register}
                      onChange={handleSubmit(onSubmit)}
                    >
                      <option value="" selected disabled>
                        Parcelas
                      </option>
                      {totalParcelasDuplicata.map((parcela) => (
                        <option value={parcela}>{parcela}</option>
                      ))}
                    </select>
                    <select
                      name="intarvaloDiasParcelas"
                      ref={register}
                      onChange={handleSubmit(onSubmit)}
                    >
                      <option value="" selected disabled>
                        Intervalo dias
                      </option>
                      {stringParcelas?.map((intervaloDias, index) => (
                        <option value={codParcelasDias[index]}>
                          {intervaloDias}
                        </option>
                      ))}
                    </select>
                    <IntlCurrencyInput
                      currency="BRL"
                      config={currencyConfig}
                      value={sub}
                      max={sub}
                      disabled
                    />
                  </>
                )}
                {dinheiro && (
                  <IntlCurrencyInput
                    currency="BRL"
                    config={currencyConfig}
                    ref={inputEl}
                    max={sub}
                    value={sub}
                    disabled
                  />
                )}
              </OnePayment>
            </SelectPayment>
          )}
          {quantityPayment.length === 2 && (
            <>
              <TwoPayment>
                <h5>Primeira forma de pagamento</h5>
                <SelectPayment>
                  <select
                    name="secondPaymet"
                    ref={register}
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <option value="" selected disabled>
                      Selecione uma forma de pagamento
                    </option>
                    <option value="DINHEIRO" selected>
                      DINHEIRO
                    </option>
                    <option value="DUPLICATA" disabled>
                      DUPLICATA
                    </option>
                  </select>
                  <div style={{ width: `88px` }} />
                  <div style={{ width: `133px` }} />
                  <IntlCurrencyInput
                    currency="BRL"
                    config={currencyConfig}
                    ref={inputEl}
                    max={sub}
                    onChange={(event, value, maskedValue) => {
                      setDinheiroValor(value);
                    }}
                  />
                  <FaWindowClose
                    className="display-flex"
                    size={18}
                    color="red"
                    onClick={() => {
                      let array = quantityPayment;
                      array.splice(quantityPayment.length - 1, 1);
                      setDuplicata(false);
                      setDinheiro(false);
                      setQuantityPayment(array);
                    }}
                  />
                </SelectPayment>
                <h5>Segunda forma de pagamento</h5>
                <SelectPayment>
                  <select
                    name="secondPaymet"
                    ref={register}
                    onChange={handleSubmit(onSubmit)}
                  >
                    <option value="" selected disabled>
                      Selecione uma forma de pagamento
                    </option>
                    <option value="DINHEIRO" disabled>
                      DINHEIRO
                    </option>
                    <option value="DUPLICATA" selected>
                      DUPLICATA
                    </option>
                  </select>
                  <select
                    name="duplicataParcelas"
                    ref={register}
                    required
                    onChange={handleSubmit(onSubmit)}
                  >
                    <option value="" selected disabled>
                      Parcelas
                    </option>
                    {totalParcelasDuplicata.map((parcela) => (
                      <option value={parcela}>{parcela}</option>
                    ))}
                  </select>
                  <select
                    name="intarvaloDiasParcelas"
                    ref={register}
                    onChange={handleSubmit(onSubmit)}
                    required
                  >
                    <option value="" selected disabled>
                      Intervalo dias
                    </option>
                    {stringParcelas?.map((intervaloDias, index) => (
                      <option value={codParcelasDias[index]}>
                        {intervaloDias}
                      </option>
                    ))}
                  </select>
                  <IntlCurrencyInput
                    currency="BRL"
                    config={currencyConfig}
                    ref={inputEl}
                    max={sub}
                    onChange={(event, value, maskedValue) => {
                      setDuplicataValor(value);
                    }}
                  />
                  <FaWindowClose
                    size={18}
                    color="red"
                    onClick={() => {
                      let array = quantityPayment;
                      array.splice(quantityPayment.length - 1, 1);
                      setDuplicata(false);
                      setDinheiro(false);
                      setQuantityPayment(array);
                    }}
                  />
                </SelectPayment>
              </TwoPayment>
            </>
          )}
        </Payments>
        <div className="button-buy-footer">
          <Link to="/finalizar-pedido">
            <Finish type="submit" onClick={(e) => handleSendOrder(e)}>
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

export default OrderFinish;
