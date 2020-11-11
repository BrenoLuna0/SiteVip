import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto;
  width: 80%;
  padding-bottom: 34px;
  border-radius: 8px;
  background-color: white;
  position: relative;

  .title-results {
    width: 95%;
    margin: 0 auto;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
  }

  .title-results div {
    display: flex;
    align-items: center;
  }

  .title-results div h1 {
    text-align: center;
    padding-top: 8px;
  }
  .title-results div p {
    margin-top: 23px;
    margin-left: 10px;
  }

  .root {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    align-items: flex-end;
  }
  .root-data-fetch {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 50%;
    bottom: 10px;
    text-align: center;
  }

  @media (max-width: 720px) {
    .title-results {
      height: 110px;
    }
    .title-results div {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .categorias {
      display: flex !important;
      flex-direction: column !important;
    }

    .title-results div h1 {
      margin-top: 4px;
      font-size: 16px;
    }
    .title-results div p {
      font-size: 14px;
      margin-top: 5px;
    }
  }
`;

export const FormSelect = styled.form`
  select {
    margin-top: 8px;
    margin-left: 8px;
  }

  @media (max-width: 720px) {
    select {
      font-size: 14px;
      width: 90%;
    }
  }
`;

export const ContainerProducts = styled.div``;
