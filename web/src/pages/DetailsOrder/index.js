import React, { useState } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { useAxios } from "../../hooks/useAxios";
import {
  Container,
  DetailsPayment,
  DetailsProducts,
  Card,
  ErrorContainer,
  ContainerError,
  Button,
  Printer,
} from "./styles";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { ReactComponent as Error404 } from "./40402.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { BiErrorCircle } from "react-icons/bi";
import { FiPrinter } from "react-icons/fi";
const numberFormat = (value) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

function DetailsOrder(props) {
  const refPrint = React.createRef();
  const idDav = props.match.params.id;
  const filial = sessionStorage.getItem("filial");

  const exportPDFWithMethod = () => {
    savePDF(refPrint.current, {
      paperSize: "auto",
      margin: 40,
      fileName: `${idDav}`,
    });
  };

  const { data, error } = useAxios(
    `/verifyDav?davCode=${idDav}&clieCod=${sessionStorage.getItem("codigo")}`
  );

  const { data: paymentMethod } = useAxios(
    `/methodPaymentDav?davCode=${idDav}`
  );

  const { data: itens } = useAxios(
    `/getProductsDav?davCode=${idDav}&filial=${filial === null ? 2 : filial}`
  );

  let valorDinheiro;
  let valorDuplicata;

  const methodPaymentFiltred = paymentMethod?.methodPaymentDav?.map((item) => {
    if (item.FORM_PAGT_CODIGO === 18) {
      valorDuplicata = item.DAV_FORM_PAGT_TOTAL;
      return "DUPLICATA";
    } else if (item.FORM_PAGT_CODIGO === 11) {
      valorDinheiro = item.DAV_FORM_PAGT_TOTAL;
      return "DINHEIRO";
    }
    return "Método não identificado";
  });

  const numParcelas = paymentMethod?.methodPaymentDav?.map((item) => {
    console.log(item);
    if (item.FORM_PAGT_CODIGO === 18) {
      return item.PARC_CODIGO;
    }
  });

  const parcelasString = paymentMethod?.parcelasString[0];
  let verify = false;
  for (var i = 0; i < itens?.products.length; i++) {
    if (itens.products[i] === 404) {
      verify = true;
      break;
    }
  }

  if (error) {
    return (
      <>
        <Header />
        <ContainerError>
          <div className="span">
            <span>
              <BiErrorCircle size={72} color="red" />
            </span>
          </div>
          <div className="text">
            <h1>Oops!</h1>
            <h3>
              Não conseguimos carregar seu pedido. Por favor, tente novamente
              mais tarde.
            </h3>
          </div>
        </ContainerError>
        <Footer />
      </>
    );
  }

  while (isNaN(paymentMethod?.currency[0].DAV_SUB_TOTAL)) {
    return (
      <>
        <Header />
        <Container>
          <h3>DETALHAMENTO DO PEDIDO {idDav}</h3>
          <DetailsPayment>
            <div className="payment-method">
              <h4>MÉTODO DE PAGAMENTO</h4>
              <Skeleton
                variant="text"
                width={"50%"}
                height={30}
                animation="wave"
              />
            </div>
            <div className="payment-total">
              <h4>TOTAL PAGO: </h4>
              <h5>SUBTOTAL: R$ 0,00</h5>
              <div className="last-field">
                <h5>DESCONTO: R$ 0,00</h5>
              </div>
              <h5 style={{ marginTop: "6px" }}>
                TOTAL:{" "}
                <Skeleton
                  variant="text"
                  width={"50%"}
                  height={30}
                  animation="wave"
                />
              </h5>
            </div>
          </DetailsPayment>
        </Container>
        <Footer />
      </>
    );
  }

  if (!itens) {
    return (
      <>
        <Header />
        <Container>
          <h3>DETALHAMENTO DO PEDIDO {idDav}</h3>
          <DetailsPayment>
            <div className="payment-method">
              <h4>MÉTODO DE PAGAMENTO</h4>
              <Skeleton
                variant="text"
                width={"50%"}
                height={30}
                animation="wave"
              />
            </div>
            <div className="payment-total">
              <h4>TOTAL PAGO: </h4>
              <h5>SUBTOTAL: R$ 0,00</h5>
              <div className="last-field">
                <h5>DESCONTO: R$ 0,00</h5>
              </div>
              <h5 style={{ marginTop: "6px" }}>
                TOTAL:{" "}
                <Skeleton
                  variant="text"
                  width={"50%"}
                  height={30}
                  animation="wave"
                />
              </h5>
            </div>
          </DetailsPayment>
        </Container>
        <Footer />
      </>
    );
  }

  if (verify) {
    return (
      <>
        <Header />
        <Container>
          <h3>DETALHAMENTO DO PEDIDO {idDav}</h3>
          <DetailsPayment>
            <div className="payment-method">
              <h4>MÉTODO DE PAGAMENTO</h4>
              <h5>{methodPaymentFiltred}</h5>
            </div>
            <div className="payment-total">
              <h4>TOTAL PAGO: </h4>
              <h5>
                SUBTOTAL:{" "}
                {numberFormat(paymentMethod?.currency[0].DAV_SUB_TOTAL)}{" "}
              </h5>
              <div className="last-field">
                <h5>
                  DESCONTO:{" "}
                  {numberFormat(paymentMethod?.currency[0].DAV_VALOR_DESCONTO)}
                </h5>
              </div>
              <h5 style={{ marginTop: "6px" }}>
                TOTAL: {numberFormat(paymentMethod?.currency[0].DAV_TOTAL)}
              </h5>
            </div>
          </DetailsPayment>
          <ErrorContainer>
            <div className="img">
              <Error404 />
            </div>
            <div className="flex">
              <p>Opss, aconteceu algo de errado.</p>
              <p>
                Verifique sua conexão com a internet e/ou tente novamente mais
                tarde
              </p>
            </div>
          </ErrorContainer>
          <Button>
            <Link to="/meus-pedidos">Voltar para o início</Link>
          </Button>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container ref={refPrint}>
        <h3>DETALHAMENTO DO PEDIDO {idDav}</h3>
        <DetailsPayment>
          <div className="payment-method">
            <h4>MÉTODO DE PAGAMENTO</h4>
            {methodPaymentFiltred.map((payment) => {
              return (
                <dl>
                  <dt>{payment}</dt>
                  {payment === "DUPLICATA" && (
                    <>
                      <dd>INTERVALO DOS DIAS: {parcelasString}</dd>
                      <dd>NÚMERO DE PARCELAS: {numParcelas}</dd>
                      <dd>VALOR PAGO: {numberFormat(valorDuplicata)}</dd>
                    </>
                  )}
                  {payment === "DINHEIRO" && (
                    <dd>VALOR PAGO: {numberFormat(valorDinheiro)}</dd>
                  )}
                </dl>
              );
            })}
          </div>
          <div className="payment-total">
            <h4>TOTAL PAGO: </h4>
            <h5>
              SUBTOTAL: {numberFormat(paymentMethod?.currency[0].DAV_SUB_TOTAL)}{" "}
            </h5>
            <div className="last-field">
              <h5>
                DESCONTO:{" "}
                {numberFormat(paymentMethod?.currency[0].DAV_VALOR_DESCONTO)}
              </h5>
            </div>
            <h5 style={{ marginTop: "6px" }}>
              TOTAL: {numberFormat(paymentMethod?.currency[0].DAV_TOTAL)}
            </h5>
          </div>
        </DetailsPayment>
        <DetailsProducts>
          {itens?.products?.map((product) => {
            return (
              <Card>
                <div className="title">
                  {product.PROD_IMAG_NOME ? (
                    <img
                      id="img"
                      src={`${process.env.REACT_APP_URL_IMG}/${product.PROD_IMAG_NOME}`}
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
                </div>
                <div className="quantity">
                  <h1>{product.PROD_DESCRICAO}</h1>

                  <div className="grid-template">
                    <div>
                      <h5>QUANTIDADE:</h5>
                      <p>{product.QTD_ITEM}</p>
                    </div>
                    <div>
                      <h5>PREÇO UNITÁRIO:</h5>
                      <p>{numberFormat(product.PRECO_DAV_UN)}</p>
                    </div>
                    <div>
                      <h5>TOTAL:</h5>
                      {numberFormat(product.PRECO_DAV_UN)}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </DetailsProducts>

        <Printer onClick={exportPDFWithMethod}>
          <FiPrinter />
          IMPRIMIR PEDIDO
        </Printer>
      </Container>
      <Footer />
    </>
  );
}

export default DetailsOrder;
