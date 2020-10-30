import React from "react";
import { Link } from "react-router-dom";

import { Container } from "./styles";
import { FaBars, FaArrowRight } from "react-icons/fa";
import { useAxios } from "../../hooks/useAxios";
import { Dropdown } from "react-bootstrap";

function MenuDrop() {
  const { data } = useAxios(`/categories?filial=2`);

  const categories = data?.map((category) => {
    return category.GRP_DESCRICAO;
  });

  return (
    <Container>
      <Dropdown>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          <FaBars size={20} />
          TODOS OS DEPARTAMENTOS
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categories?.map((category) => {
            return (
              <Dropdown.Item>
                <Link to={`/products?category=${category}`}>
                  <span>
                    <FaArrowRight />
                  </span>
                  {category}
                </Link>
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}

export default MenuDrop;
