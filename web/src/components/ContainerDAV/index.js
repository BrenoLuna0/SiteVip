import React, { useState } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

import { ContainerProduct, ContainerDetails } from "./styles";
import SlideDown from "../../components/SlideDown";
import { useAxios } from "../../hooks/useAxios";
function ContainerDAV({ id }) {
  const [isVisible, setIsVisible] = useState(false);
  const { data: products } = useAxios(`/getProductsDav?davCode=${id}`);

  return (
    <>
      <ContainerProduct>
        <h3>Pedido {id}</h3>
        <span onClick={() => setIsVisible(!isVisible)}>
          <h4>Ver detalhes</h4>
          <AiOutlineArrowDown size={20} />
        </span>
      </ContainerProduct>
      <SlideDown isVisible={isVisible}>
        <ContainerDetails>
          <div className="flex">
            {products?.totalProducts > 1 && (
              <p>{products.totalProducts} produtos</p>
            )}
            {products?.totalProducts === 1 && <p>1 produto</p>}
            <p className="link-details">ver detalhes</p>
          </div>
          <div className="subtotal">
            <p>Subtotal: R$ 125,00</p>
          </div>
        </ContainerDetails>
      </SlideDown>
    </>
  );
}

export default ContainerDAV;
