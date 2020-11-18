import React from "react";
import { useAxios } from "../../hooks/useAxios";
import { numberFormat } from "../../utils/currency";
import { Container, DetailsPayment, DetailsProducts, Card } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

function DetailsOrder(props) {
  const idDav = props.match.params.id;
  const { data: paymentMethod } = useAxios(
    `/methodPaymentDav?davCode=${idDav}`
  );
  const { data: itens } = useAxios(`/getProductsDav?davCode=${idDav}`);
  console.log(itens);
  const methodPaymentFiltred = paymentMethod?.methodPaymentDav.map((item) => {
    if (item.FORM_PAGT_CODIGO === 18) {
      return "Duplicata";
    } else if (item.FORM_PAGT_CODIGO === 11) {
      return "Dinheiro";
    }
    return "Método não identificado";
  });

  return (
    <>
      <Header />
      <Container>
        <h3>Detalhamento do pedido {idDav}</h3>
        <DetailsPayment>
          <div className="payment-method">
            <h4>Método de pagamento</h4>
            <h5>{methodPaymentFiltred}</h5>
          </div>
          <div className="payment-total">
            <h4>Total pago: </h4>
            <h5>
              Subtotal: {numberFormat(paymentMethod?.currency[0].DAV_SUB_TOTAL)}{" "}
            </h5>
            <div className="last-field">
              <h5>
                Desconto:{" "}
                {numberFormat(paymentMethod?.currency[0].DAV_VALOR_DESCONTO)}
              </h5>
            </div>
            <h5 style={{ marginTop: "6px" }}>
              Total: {numberFormat(paymentMethod?.currency[0].DAV_TOTAL)}
            </h5>
          </div>
        </DetailsPayment>
        <DetailsProducts>
          {itens?.products.map((product) => (
            <Card>
              <div className="title">
                <img
                  id="img"
                  src={`${process.env.PUBLIC_URL}/images/no-image.png`}
                  alt="produto"
                  className="image"
                />
              </div>
              <div className="quantity">
                <h1>{product.PROD_DESCRICAO}</h1>
                <div>
                  <p>{}</p>
                </div>
              </div>
            </Card>
          ))}
        </DetailsProducts>
      </Container>
      <Footer />
    </>
  );
}

export default DetailsOrder;
