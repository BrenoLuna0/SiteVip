import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { GiPadlock } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa";
import {
  Container,
  ContainerBody,
  Inputs,
  InputPassword,
  InputCnpj,
  LoginButton,
  ContainerLogin,
} from "./styles";

import { Link } from "react-router-dom";

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    toast.info("Em desenvolvimento.", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      hideProgressBar: true,
      draggable: true,
      progress: undefined,
    });
  };

  const onSubmit = (data) => {
    setPassword(data.senha);
    setLogin(data.email);
  };

  return (
    <>
      <Container>
        <ContainerBody>
          <div className="return" onClick={() => (window.location.href = "/")}>
            <FaArrowLeft size={18} color="black" />
            <span>Voltar para o inicio</span>
          </div>
          <div className="img-container">
            <img src="/images/vip_logo.png" alt="Logo VIP" />
          </div>

          <Inputs>
            <ContainerLogin>
              <InputCnpj>
                <label>Email:</label>
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
              </InputCnpj>
              <InputPassword>
                <label>Senha:</label>
                <input
                  className="w-filial"
                  type="password"
                  name="senha"
                  placeholder="*********"
                  ref={register({ required: true })}
                  onBlur={handleSubmit(onSubmit)}
                />
                {errors.senha && <span>Senha obrigatória.</span>}
              </InputPassword>
              <div className="remember-password">
                <Link to="/">
                  <span>
                    <GiPadlock size={18} />
                  </span>
                  <p>Esqueceu sua senha?</p>
                </Link>
              </div>
            </ContainerLogin>
          </Inputs>

          <LoginButton
            onClick={() => {
              handleLogin();
            }}
          >
            ENTRAR
          </LoginButton>

          <div className="new-user">
            <p>Novo por aqui?</p>
            <Link to="/" className="bold">
              <p>Crie uma conta.</p>
            </Link>
          </div>
        </ContainerBody>
      </Container>
    </>
  );
}

export default Login;
