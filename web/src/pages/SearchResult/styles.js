import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto;

  width: 90%;
  border-radius: 8px;
  background-color: white;

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

export const NoResult = styled.div`
  margin: 20px auto;
  height: 60vh;
  width: 90%;
  border-radius: 8px;
  background-color: white;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
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
