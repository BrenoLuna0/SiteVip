import React from "react";
import { Container } from "./styles";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import api from "../../services/api";

function ButtonBuy({ id }) {
  const toastId = React.useRef(null);

  async function insertItems(prodCodigo, value) {
    await api
      .post("/cart", {
        prodQtd: value,
        filial: sessionStorage.getItem("filial"),
        codigo: sessionStorage.getItem("codigo"),
        prodCodigo: prodCodigo,
      })
      .then(() => {
        if (!toast.isActive(toastId.current)) {
          toast.success("Produto adicionado com sucesso!", {
            position: "top-center",
            autoClose: 5000,
            closeOnClick: true,
            hideProgressBar: true,
            draggable: true,
            progress: undefined,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Erro ao carregar carrinho");
      });
  }

  return (
    <Container>
      <button onClick={() => insertItems(id, 1)}>
        <p>Adicionar ao carrinho </p>
        <span>
          <FaCartPlus color="white" size={24} />
        </span>
      </button>
    </Container>
  );
}
export default ButtonBuy;
