import React from "react";
import { Container } from "./styles";
import { FaCartPlus } from "react-icons/fa";
import { toast } from "react-toastify";
import { isSignedIn } from "../../services/auth";
import "react-toastify/dist/ReactToastify.css";

import { useAxios } from "../../hooks/useAxios";
import api from "../../services/api";

function ButtonBuy({ id, title }) {
  const toastId = React.useRef(null);

  async function insertItems(prodCodigo, value) {
    if (isSignedIn()) {
      const { data } = await api.get(
        `/cartItem?filial=${sessionStorage.getItem(
          "filial"
        )}&codigo=${sessionStorage.getItem("codigo")}&prodCodigo=${id}`
      );
      if (data.results[0].PROD_QTD >= data.produto.PROD_QTD_ATUAL) {
        toast.error("Erro ao carregar produto, tente novamente mais tarde.", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          hideProgressBar: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
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
