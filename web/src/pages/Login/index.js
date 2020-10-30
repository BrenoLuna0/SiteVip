import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAxios } from "../../hooks/useAxios";
import InputMask from "react-input-mask";
import { toast } from "react-toastify";
import { GiPadlock } from "react-icons/gi";
import {
  Container,
  ContainerBody,
  Inputs,
  InputPassword,
  InputCnpj,
  SelectTypeUser,
  FilialOption,
  LoginButton,
  ContainerLogin,
} from "./styles";

import { onSignIn } from "../../services/auth";
import { Link } from "react-router-dom";

function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [selectOption, setSelectedOption] = useState("1");

  const [user, setUser] = useState(true);
  const [enterprise, setEnterprise] = useState(false);

  const handleLogin = async () => {
    if (enterprise) {
      const result = await onSignIn(login, password);

      if (result) {
        sessionStorage.setItem("filial", selectOption);
        window.location.href = "/";
      } else {
        toast.error("Login ou senha inválidos. Tente novamente.", {
          position: "top-center",
          autoClose: 5000,
          closeOnClick: true,
          hideProgressBar: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.info("Em desenvolvimento.", {
        position: "top-center",
        autoClose: 5000,
        closeOnClick: true,
        hideProgressBar: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const onSubmit = (data) => {
    setPassword(data.senha);
    setLogin(data.email);
  };

  const { data, error } = useAxios("/filial");

  if (error) {
    toast.error("Serviço Indisponível no momento.", {
      position: "top-center",
      autoClose: 5000,
      closeOnClick: true,
      hideProgressBar: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <>
      <Container>
        <ContainerBody>
          <div className="img-container">
            <img src="/images/vip_logo.png" alt="Logo VIP" />
          </div>
          <SelectTypeUser>
            <div
              className={`${user && !enterprise ? "active" : ""}`}
              onClick={() => {
                setUser(true);
                setEnterprise(false);
              }}
            >
              Usuário
            </div>
            <div
              className={`multiPayment ${enterprise && !user ? "active" : ""}`}
              onClick={() => {
                setEnterprise(true);
                setUser(false);
              }}
            >
              Fornecedor
            </div>
          </SelectTypeUser>

          <Inputs>
            {user && (
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
            )}
            {enterprise && (
              <>
                <ContainerLogin>
                  <InputCnpj className="field-cpnj">
                    <label to="clieCpfCnpj">CNPJ:</label>
                    <InputMask
                      mask={"99.999.999/9999-99"}
                      className="input-login"
                      maskChar={null}
                      value={login}
                      onChange={(event) => {
                        setLogin(event.target.value);
                      }}
                    />
                  </InputCnpj>
                  <InputPassword className="field-password">
                    <label to="senha">Senha:</label>
                    <input
                      className="input-login"
                      type="password"
                      name="senha"
                      id="senha"
                      value={password}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </InputPassword>
                </ContainerLogin>
                <FilialOption>
                  <label to="filial">Filial:</label>
                  <select
                    name="filial"
                    id="filial"
                    className="input-login"
                    onChange={(event) => setSelectedOption(event.target.value)}
                  >
                    {data?.map((filial, index) => {
                      return (
                        <option value={filial.FIL_CODIGO} key={index}>
                          {filial.FIL_NOME}
                        </option>
                      );
                    })}
                  </select>
                </FilialOption>
              </>
            )}
          </Inputs>

          <LoginButton
            onClick={() => {
              handleLogin();
            }}
          >
            ENTRAR
          </LoginButton>
          {user && (
            <div className="new-user">
              <p>Novo por aqui?</p>
              <Link to="/" className="bold">
                <p>Crie uma conta.</p>
              </Link>
            </div>
          )}
        </ContainerBody>
      </Container>
    </>
  );
}

export default Login;
