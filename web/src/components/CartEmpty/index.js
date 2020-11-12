import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { CarEmpty } from "./styles";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

function CartEmpty() {
  return (
    <>
      <Header />
      <CarEmpty>
        <h1>
          <FaCartPlus size={20} color="white" />
          Produtos adicionados ao carrinho
        </h1>
        <div>
          <p>O carrinho está vazio :(</p>
          <p> Deseja olhar outros produtos?</p>
          <Link to="/">
            <span>
              <FaCartPlus size={20} color="white" /> Continuar comprando
            </span>
          </Link>
        </div>
      </CarEmpty>
      <Footer />
    </>
  );
}

export default CartEmpty;
