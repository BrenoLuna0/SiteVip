import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

import { ContainerProduct, ContainerDetails } from "./styles";
import SlideDown from "../../components/SlideDown";
import { useAxios } from "../../hooks/useAxios";
import { numberFormat } from "../../utils/currency";

function ContainerDAV({ id, subtotal }) {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(false);
  const { data: products } = useAxios(`/getProductsDav?davCode=${id}`);

  return (
    <>
      <ContainerProduct>
        <h3>Pedido {id}</h3>
        <span
          onClick={() => {
            setIsVisible(!isVisible);
            setActive(!active);
          }}
        >
          {active === false ? (
            <>
              <h4>Ver detalhes</h4>
              <AiOutlineArrowDown size={20} />
            </>
          ) : (
            <>
              <h4>Esconder Detalhes</h4>
              <AiOutlineArrowUp size={20} x />
            </>
          )}
        </span>
      </ContainerProduct>
      <SlideDown isVisible={isVisible}>
        <ContainerDetails>
          <div className="flex">
            {products?.totalProducts > 1 && (
              <p>{products.totalProducts} produtos</p>
            )}
            {products?.totalProducts === 1 && <p>1 produto</p>}
            <Link to={`/meus-pedidos/${id}`}>
              <p className="link-details">ver detalhes</p>
            </Link>
          </div>
          <div className="subtotal">
            <p>Subtotal: {numberFormat(subtotal)}</p>
          </div>
        </ContainerDetails>
      </SlideDown>
    </>
  );
}

export default ContainerDAV;
