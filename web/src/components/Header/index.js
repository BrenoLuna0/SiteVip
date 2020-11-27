import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { toast } from "react-toastify";
import { onSignOut, isSignedIn } from "../../services/auth";
import MenuDrop from "../MenuDrop";
import cn from "classnames";

import {
  FaPhone,
  FaSignOutAlt,
  FaBars,
  FaTimes,
  FaShoppingCart,
  FaArrowRight,
  FaUserAlt,
} from "react-icons/fa";

import { AiOutlineCodeSandbox } from "react-icons/ai";

import InputSearch from "../InputSearch";
import { Container, Header, MenuDropDown, SubHeader } from "./styles";

function Component() {
  const [showMenu, setShowMenu] = useState(false);

  const { data } = useAxios(`/categories?filial=2`);

  const categories = data?.map((category) => {
    return category.GRP_DESCRICAO;
  });

  return (
    <>
      <Container>
        <SubHeader>
          <div>
            <FaPhone />
            (81) 2103-7300
          </div>
          <div className="exit">
            {isSignedIn() ? (
              <div className="d-flex justify-content-between">
                <div id="my-account" style={{ marginRight: "12px" }}>
                  <Link to="/meus-pedidos" style={{ color: "#171d4b" }}>
                    <AiOutlineCodeSandbox />
                    Meus Pedidos
                  </Link>
                </div>
                <div
                  onClick={() => {
                    onSignOut();
                    window.location.href = "/";
                  }}
                  id="logout"
                  style={{ cursor: "pointer" }}
                >
                  <FaSignOutAlt></FaSignOutAlt>
                  Logout
                </div>
              </div>
            ) : (
              <div
                style={{ cursor: "pointer" }}
                onClick={() => (window.location.href = "/login-empresa")}
                id="login"
              >
                <FaUserAlt />
                Entrar
              </div>
            )}
          </div>
        </SubHeader>

        <Header>
          <div className="logo">
            <Link to="/">
              <img
                className="logo"
                src={`${process.env.PUBLIC_URL}/images/vip_logo.png`}
                alt="Logo"
                width="120"
                height="120"
              />
            </Link>
          </div>

          <MenuDrop />

          <InputSearch />
          {isSignedIn() ? (
            <Link to="/cart">
              <FaShoppingCart size={32} className="shopping-cart" />
            </Link>
          ) : (
            <Link
              onClick={() =>
                toast.error("Você primeiro deve fazer login.", {
                  position: "top-center",
                  autoClose: 5000,
                  closeOnClick: true,
                  draggable: true,
                  progress: undefined,
                })
              }
            >
              <FaShoppingCart size={32} className="shopping-cart" />
            </Link>
          )}

          <FaBars
            size={32}
            className="open-menu"
            onClick={() => setShowMenu(!showMenu)}
          />
          <MenuDropDown className={cn({ active: showMenu })}>
            <nav>
              <div>
                <h1>TODOS OS DEPARTAMENTOS</h1>
              </div>
              {categories?.map((category) => {
                return (
                  <div className="link-menu">
                    <Link to={`/products?category=${category}`}>
                      <span>
                        <FaArrowRight />
                        {category}
                      </span>
                    </Link>
                  </div>
                );
              })}
            </nav>

            <div>
              <FaTimes
                className="close-button-menu"
                size={24}
                onClick={() => setShowMenu(false)}
              />
            </div>
          </MenuDropDown>
        </Header>
      </Container>
    </>
  );
}

export default Component;
