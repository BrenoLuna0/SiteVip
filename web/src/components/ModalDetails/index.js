import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Container, ContainerProducts, Table } from "./styles";

function ModalDetails({ produtos }) {
  const [show, setShow] = useState(false);

  return (
    <Container>
      <p onClick={() => setShow(true)}>ver datalhes</p>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Produtos Detalhes
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table>
            <p></p>
            <p>Produto</p>
            <p>Qtd</p>
            <p>Subtotal</p>
          </Table>

          {produtos.map((product) => {
            return (
              <ContainerProducts>
                <div>
                  {product.PROD_IMAG[0] === undefined ? (
                    <img
                      src={process.env.PUBLIC_URL + "/images/no-image.png"}
                      alt={product.PROD_DESCRICAO.slice(0, 18)}
                    />
                  ) : (
                    <img
                      src={`http://187.84.80.162:8082/imagens/${product.PROD_IMAG[0].PROD_IMAG_NOME}`}
                      alt={product.PROD_DESCRICAO.slice(0, 18)}
                    />
                  )}
                </div>
                <div>{product.PROD_DESCRICAO}</div>
                <div>{product.PROD_QTD}</div>
                <div>
                  {(product.PROD_QTD * product.PROD_PRECO_VENDA).toLocaleString(
                    "pt-br",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </div>
              </ContainerProducts>
            );
          })}
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default ModalDetails;
