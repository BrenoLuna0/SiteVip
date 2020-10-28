import styled from "styled-components";

export const Container = styled.div`
  div {
    width: 100% !important;
  }
  width: 100% !important;
  margin-top: 20px;
  color: white !important;
  h1 {
    display: flex;
    align-items: center;
    font-size: 22px;
    color: white;
    margin-bottom: 20px;
    svg {
      margin-right: 10px;
    }
  }

  div p {
    font-size: 18px;
    text-align: center;
  }
`;

export const CarEmpty = styled.div`
  div {
    width: 100% !important;
  }
  width: 100% !important;
  margin-top: 20px;
  color: white !important;
  h1 {
    display: flex;
    align-items: center;
    font-size: 22px;
    color: white;
    margin-bottom: 20px;
    svg {
      margin-right: 10px;
    }
  }

  div p {
    font-size: 18px;
    text-align: center;
  }

  div a span {
    color: white !important;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;

    svg {
      margin-right: 10px;
    }
  }

  div a span:hover {
    color: #a9a9a9 !important;
    text-decoration: none !important;
    transition: 0.2s;
  }
`;

export const ContainerProducts = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-left: 5px;
  }
  .name-product {
    font-size: 16px;
  }
`;
