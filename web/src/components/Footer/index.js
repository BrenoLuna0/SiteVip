import React from "react";
import { Container, ContainerLinks } from "./styles";
import { Link } from "react-router-dom";
import {
  FaMapMarkedAlt,
  FaPhone,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
function Footer() {
  return (
    <>
      <Container>
        <ContainerLinks>
          <div>
            <h2>Categorias</h2>
            <ul>
              <li>
                <Link to="/">Todas as categorias</Link>
              </li>
              <li>
                <Link to="/">Perifericos</Link>
              </li>
              <li>
                <Link to="/products?category=ACESSORIOS">Acessórios</Link>
              </li>
              <li>
                <Link to="/products?category=TELEFONE/CELULAR">
                  Smartphones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2>Contato</h2>
            <ul className="contact">
              <li>
                <span>
                  <FaMapMarkedAlt />
                </span>
                Av. Agamenon Magalhães, 646, M. Nassau - Caruaru/PE
              </li>
              <li>
                <span>
                  <FaPhone />
                </span>
                (81) 2103-7300
              </li>
            </ul>
          </div>

          <div>
            <h2>Nossas Redes</h2>
            <ul className="social">
              <li>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.instagram.com/vipinformatica/?hl=pt-br"
                  >
                    <FaInstagram size={24} />
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://pt-br.facebook.com/vipinformatica.net/"
                  >
                    <FaFacebook size={24} />
                  </a>
                </span>
              </li>

              <li>
                <span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://api.whatsapp.com/send?phone=5581995480041&text=Ol%C3%A1%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido"
                  >
                    <FaWhatsapp size={24} />
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </ContainerLinks>

        <p className="copy">© 2020 Copyright: CSM Tecnologia da Informação</p>
      </Container>
    </>
  );
}

export default Footer;
