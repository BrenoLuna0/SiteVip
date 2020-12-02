import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  min-height: 80vh;
  background-color: white;
  margin: 5px auto;
  padding-bottom: 10px;
  h3 {
    padding-top: 16px;
    text-align: center;
  }

  .payment-method {
    dd {
      color: #666;
      font-weight: bold;
      font-size: 16px;
    }
  }
`;

export const DetailsProducts = styled.div``;

export const Card = styled.div`
  width: 80%;
  margin: 12px auto;
  border: 1px solid #666;
  padding: 1.2em;

  display: flex;
  align-items: center;
  .title {
    img {
      height: 80px;
      width: 80px;
    }
  }
  .quantity {
    margin-left: 12px;

    h1 {
      font-size: 18px;
    }
  }
  .grid-template {
    display: flex;
    justify-content: space-between;
  }
  h5 {
    font-size: 16px;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 16px;
    }

    .grid-template {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const DetailsPayment = styled.div`
  width: 80%;
  margin: 32px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  h5 {
    font-size: 18px;
    font-weight: 400;
    color: #666;
  }

  div:nth-child(1) {
    border-right: 1px solid #666;
  }

  .last-field {
    width: 100%;
    border-bottom: 1.2px solid black;
  }

  @media (max-width: 800px) {
    h4 {
      font-size: 21px;
    }
    h5 {
      font-size: 17px;
    }
  }
  @media (max-width: 650px) {
    grid-template-columns: 1fr;

    div:nth-child(1) {
      border-right: none;
    }
  }
`;
