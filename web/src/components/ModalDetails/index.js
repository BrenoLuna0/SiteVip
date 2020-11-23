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
