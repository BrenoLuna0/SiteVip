import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";

import { Container } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { BsCheckCircle } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { useAxios } from "../../hooks/useAxios";

function NumberOrder(props) {
  const orderNumber = props.match.params.idPedido;
  const { data, error } = useAxios(
    `/verifyDav?davCode=${orderNumber}&clieCod=${sessionStorage.getItem(
      "codigo"
    )}`
  );
  if (error) {
    return (
      <>
        <Header />
        <Container>
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
        </Container>
        <Footer />
      </>
    );
  }
  if (!data) {
    return (
      <>
        <Header />
        <Container>
          <div className="span">
            <span>
              <Skeleton
                variant="circle"
                width={72}
                height={72}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              />
            </span>
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
        <div className="span">
          <span>
            <BsCheckCircle size={72} color="green"></BsCheckCircle>
          </span>
        </div>
        <div className="text">
          <h1>Seu pedido {orderNumber} está sendo processado.</h1>
          <h3>Obrigado por comprar conosco!</h3>
        </div>
        <Link className="see-details" to={`/meus-pedidos/${orderNumber}`}>
          <div>Ver detalhes</div>
        </Link>
      </Container>
      <Footer />
    </>
  );
}

export default NumberOrder;
