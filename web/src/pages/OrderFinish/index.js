import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Skeleton from "@material-ui/lab/Skeleton";
import IntlCurrencyInput from "react-intl-currency-input";

//estilos
import { FaShoppingCart, FaWindowClose } from "react-icons/fa";
import { Container, Finish, Payments, SelectPayment } from "./styles";

//componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ModalDetails from "../../components/ModalDetails";
import InputMask from "../../components/InputMask";
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
  const [quantityPayment, setQuantityPayment] = useState([1]);
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
    if (data.firstPayment === "DINHEIRO") {
      setDinheiro(true);
      setDuplicata(false);
    } else if (data.firstPayment === "DUPLICATA") {
      setDuplicata(true);
      setDinheiro(false);
    }
  };

  const handleChange = (event, value, maskedValue) => {
    event.preventDefault();
    console.log(value);
  };

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
                if (quantityPayment < 2) {
                  setDinheiro(true);
                  setDuplicata(true);
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
                      <option value="">{parcela}</option>
                    ))}
                  </select>
                  <select>
                    <option value="" selected disabled>
                      Intervalo dias
                    </option>
                  </select>
                  <IntlCurrencyInput
                    currency="BRL"
                    config={currencyConfig}
                    onBlur={handleChange}
                    max={sub}
                    value={duplicata}
                  />
                </>
              )}
              {dinheiro && (
                <IntlCurrencyInput
                  currency="BRL"
                  config={currencyConfig}
                  onBlur={(event, value, maskedValue) => {
                    event.preventDefault();
                    console.log(value);
                  }}
                  max={sub}
                  value={dinheiro}
                />
              )}
            </SelectPayment>
          )}
          {quantityPayment.length === 2 && (
            <>
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
                  onBlur={handleChange}
                  max={sub}
                />
                <FaWindowClose
                  className="display-flex"
                  size={18}
                  color="red"
                  onClick={() => {
                    let array = quantityPayment;
                    array.splice(quantityPayment.length - 1, 1);
                    setDinheiro(false);
                    setQuantityPayment(array);
                  }}
                />
              </SelectPayment>
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
                  onChange={handleSubmit(onSubmit)}
                >
                  <option value="" selected disabled>
                    Parcelas
                  </option>
                  {totalParcelasDuplicata.map((parcela) => (
                    <option value={parcela}>{parcela}</option>
                  ))}
                </select>
                <select>
                  <option value="" selected disabled>
                    Intervalo dias
                  </option>
                </select>
                <IntlCurrencyInput
                  currency="BRL"
                  config={currencyConfig}
                  onBlur={handleChange}
                  max={sub}
                />
                <FaWindowClose
                  size={18}
                  color="red"
                  onClick={() => {
                    let array = quantityPayment;
                    array.splice(quantityPayment.length - 1, 1);
                    setDuplicata(false);
                    setQuantityPayment(array);
                  }}
                />
              </SelectPayment>
            </>
          )}
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

export default OrderFinish;
