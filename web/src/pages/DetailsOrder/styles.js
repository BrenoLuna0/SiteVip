import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
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

export const DetailsPayment = styled.div`
  width: 80%;
  margin: 32px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  h5 {
    font-size: 18px;
    font-weight: 400;
    color: #666;
  }

  div:nth-child(1),
  div:nth-child(2) {
    border-right: 1px solid #666;
  }

  .last-field {
    width: 80%;
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

export const ErrorContainer = styled.div`
  display: flex;
  width: 80%;
  height: 50%;
  margin: 24px auto;
  align-items: center;
  justify-content: center;
  svg {
    height: 200px;
    width: 200px;
  }
  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-left: 6px;
    text-align: center;
    p {
      font-size: 26px;
      font-weight: 400;
    }
  }

  @media (max-width: 950px) {
    .img {
      display: none;
    }
  }

  @media (max-width: 712px) {
    height: 40%;
    .flex {
      p {
        font-size: 22px;
      }
    }
    svg {
      display: none;
    }
  }
`;

export const Button = styled.div`
  width: 30%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #171d4b;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  a {
    text-decoration: none;
    color: white !important;
  }
  &:hover {
    background-color: #38507a;
    transition: 0.2s ease-out;
  }

  @media (max-width: 600px) {
    width: 50%;
  }
`;

export const ContainerError = styled.div`
  width: 80%;
  margin: 20px auto;
  height: 60vh;
  background-color: white;
  border-radius: 8px;
  .span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30%;
  }
  .text {
    margin-top: 40px;
    text-align: center;
  }
`;

export const Printer = styled.div`
  width: 30%;
  margin: 20px auto;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: #171d4b;
  color: white;
  border-radius: 8px;
  justify-content: center;
  svg {
    margin-right: 12px;
  }
  a {
    color: white !important;
    text-decoration: none;
  }
`;
