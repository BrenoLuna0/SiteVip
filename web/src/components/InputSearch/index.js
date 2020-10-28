import React from "react";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Container } from "./styles";
import { useHistory } from "react-router";

function InputSearch() {
  const { register, handleSubmit } = useForm();
  let history = useHistory();
  function onSubmit(data) {
    history.push(`/pesquisar/${data.name.toUpperCase()}`);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)} method="get">
        <input
          type="text"
          name="name"
          placeholder="Buscar por produto"
          ref={register}
        ></input>
        <span class="bg-hover">
          <button type="submit" className="button-input">
            <FaSearch></FaSearch>
          </button>
        </span>
      </form>
    </Container>
  );
}

export default InputSearch;
