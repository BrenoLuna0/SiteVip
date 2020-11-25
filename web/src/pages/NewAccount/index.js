import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { RiArrowDropRightLine } from "react-icons/ri";
import InputMask from "react-input-mask";

import {
  Container,
  ContainerBody,
  ContainerFields,
  ButtonContainer,
} from "./styles";

function NewAccount() {
  const [pj, setPJ] = useState(false);
  const [pf, setPF] = useState(true);
  const [cpfCnpjError, setCpfCnpjError] = useState(false);
  const [passwordEquals, setPasswordEquals] = useState(false);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <Container>
      <ContainerBody>
        <div className="pj-pf">
          <span>TIPO DE CLIENTE: </span>
          <div>
            <label>
              <input
                type="radio"
                name="fisica"
                id="fisica"
                value="F"
                checked={pf}
                onClick={() => {
                  setPF(true);
                  setPJ(false);
                }}
              />
              <p>Pessoa Física</p>
            </label>
            <label>
              <input
                type="radio"
                name="juridica"
                id="juridica"
                value="J"
                checked={pj}
                onClick={() => {
                  setPJ(true);
                  setPF(false);
                }}
              />
              <p>Pessoa Jurídica</p>
            </label>
          </div>
        </div>
        <ContainerFields>
          <form>
            <div>
              <p>
                Nome completo: <span>*</span>
              </p>
              <input
                type="text"
                name="name"
                ref={register({ required: true })}
              />
              {errors.name && <p className="error">Campo obrigatório.</p>}
            </div>

            {pf && (
              <div>
                <p>
                  CPF: <span>*</span>
                </p>
                <InputMask
                  mask={"999.999.999-99"}
                  name="CPF"
                  maskChar={null}
                  inputRef={register({ required: true })}
                />
                {errors.CPF && <p className="error">Campo obrigatório.</p>}
              </div>
            )}
            <div>
              <p>
                Email: <span>*</span>
              </p>
              <input
                type="email"
                name="email"
                ref={register({
                  required: "E-mail obrigatório.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Entre com um e-mail válido.",
                  },
                })}
              />

              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="double-fields">
              <div>
                <p>
                  Senha: <span>*</span>
                </p>
                <input
                  type="password"
                  name="passwordFirst"
                  placeholder="*********"
                  ref={register({
                    required: true,
                    minLength: {
                      value: 5,
                      message: "A senha deve conter no mínimo 5 caracteres.",
                    },
                  })}
                />
                {errors.passwordFirst && <p>{errors.passwordFirst.message}</p>}
              </div>
              <div>
                <p>
                  Confirme a senha: <span>*</span>
                </p>
                <input
                  type="password"
                  name="passwordSecond"
                  placeholder="*********"
                  ref={register({
                    required: true,
                    minLength: {
                      value: 5,
                      message: "A senha deve conter no mínimo 5 caracteres.",
                    },
                  })}
                />
                {errors.passwordSecond && (
                  <p>{errors.passwordSecond.message}</p>
                )}
              </div>
            </div>
          </form>
        </ContainerFields>
        <ButtonContainer>
          <button type="submit" onClick={handleSubmit(onSubmit)}>
            Cadastrar <RiArrowDropRightLine size={18} />
          </button>
        </ButtonContainer>
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

export default NewAccount;
