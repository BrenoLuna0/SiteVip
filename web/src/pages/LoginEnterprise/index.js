import React, { useState } from "react";
import { onSignIn } from "../../services/auth";
import { useAxios } from "../../hooks/useAxios";
import { toast } from "react-toastify";
import InputMask from "react-input-mask";
import { FaArrowLeft } from "react-icons/fa";
import {
  Container,
  ContainerBody,
  InputPassword,
  InputCnpj,
  FilialOption,
  LoginButton,
  ContainerLogin,
} from "./styles";

function LoginEnterprise() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [selectOption, setSelectedOption] = useState("1");

  const handleLogin = async () => {
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
    <Container>
      <ContainerBody>
        <div className="return" onClick={() => (window.location.href = "/")}>
          <FaArrowLeft size={18} color="black" />
          <span>Voltar para o inicio</span>
        </div>
        <div className="img-container">
          <img src="/images/vip_logo.png" alt="Logo VIP" />
        </div>
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
        <LoginButton
          onClick={() => {
            handleLogin();
          }}
        >
          ENTRAR
        </LoginButton>
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
}
export default LoginEnterprise;
