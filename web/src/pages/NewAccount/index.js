import React, { useState } from "react";
import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import { RiArrowDropRightLine } from "react-icons/ri";

import {
  Container,
  ContainerBody,
  ContainerFields,
  ButtonContainer,
} from "./styles";

function NewAccount() {
  const [pj, setPJ] = useState(false);
  const [pf, setPF] = useState(true);
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [mask, setMask] = useState("");

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
              <input type="text" name="name" />
            </div>

            {pf && (
              <div>
                <p>
                  CPF: <span>*</span>
                </p>
                <CpfCnpj
                  value={cpfCnpj}
                  onChange={(event, type) => {
                    setCpfCnpj(event.target.value);
                    setMask(type === "CPF");
                  }}
                />
              </div>
            )}
            <div>
              <p>
                Email: <span>*</span>
              </p>
              <input type="email" name="" id="" />
            </div>

            <div className="double-fields">
              <div>
                <p>
                  Senha: <span>*</span>
                </p>
                <input type="password" name="" id="" />
              </div>
              <div>
                <p>
                  Confirme a senha: <span>*</span>
                </p>
                <input type="password" name="" id="" />
              </div>
            </div>
          </form>
        </ContainerFields>
        <ButtonContainer>
          <button>
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
