import React from "react";
import { useForm } from "react-hook-form";

import { FaArrowLeft } from "react-icons/fa";

import { Container, ContainerBody, LoginButton } from "./styles";

const PasswordForget = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <ContainerBody>
        <div className="return" onClick={() => (window.location.href = "/")}>
          <FaArrowLeft size={18} color="black" />
          <span>Voltar para o inicio</span>
        </div>
        <div className="img-container">
          <img src="/images/vip_logo.png" alt="" />
        </div>
        <div className="explain">
          <h4>Insira seu e-mail associado à conta da VIP Informática</h4>
        </div>

        <div className="email">
          <label>E-mail:</label>

          <input
            type="email"
            name="email"
            placeholder="jose@exemplo.com"
            ref={register({
              required: "E-mail obrigatório.",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Entre com um e-mail válido.",
              },
            })}
            onBlur={handleSubmit(onSubmit)}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="confirm-email">
          <LoginButton>Continuar</LoginButton>
        </div>
      </ContainerBody>
      <div className="copy">
        <span>
          Photo by{" "}
          <a href="https://unsplash.com/@omidarmin?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Omid Armin
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/technology-products?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span>
      </div>
    </Container>
  );
};

export default PasswordForget;
