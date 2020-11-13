import React from "react";
import { Container } from "./styles";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { isSignedIn } from "../../services/auth";
import "react-toastify/dist/ReactToastify.css";

import api from "../../services/api";

function ButtonBuy({ id, title }) {
  const toastId = React.useRef(null);

  async function insertItems(prodCodigo, value) {
    if (isSignedIn()) {
      await api
        .post("/cart", {
          prodQtd: value,
          filial: sessionStorage.getItem("filial"),
          codigo: sessionStorage.getItem("codigo"),
          prodCodigo: prodCodigo,
        })
        .then(() => {
          if (!toast.isActive(toastId.current)) {
            toast.success("Adicionado com sucesso!", {
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
    } else {
      toast.error("Você primeiro deve fazer login.", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        hideProgressBar: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  return (
    <Container>
      <button onClick={() => insertItems(id, 1)}>
        <p>{title}</p>
        <span>
          <FaCartPlus color="white" size={24} />
        </span>
      </button>
    </Container>
  );
}
export default ButtonBuy;
