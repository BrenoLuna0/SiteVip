import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  min-height: 50vh;
  height: 100%;
  background-color: white;
  margin: 15px auto;
  box-shadow: 14px 15px 20px -20px rgba(0, 0, 0, 0.75);
  border-radius: 8px;

  a:hover {
    text-decoration: none;
  }

  .all-products {
    width: 90%;
    padding-top: 16px;
    padding-bottom: 16px;

    margin: 20px auto;
    h3 {
      font-size: 24px;
    }
    div {
      display: flex;
      justify-content: space-between;
    }
    div p {
      font-size: 20px;
    }
  }

  .all-products div div {
    p {
      margin-right: 8px;
    }
    p:nth-child(2) {
      cursor: pointer;
    }
    p:nth-child(2):hover {
      color: grey;
      transition: 0.2s ease-out;
      text-decoration: underline !important;
    }
  }

  .button-buy-footer {
    padding-bottom: 10px;
  }
`;

export const Finish = styled.button`
  width: 40%;
  margin: 30px auto;
  height: 50px;
  text-transform: uppercase;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  background-color: #009e2a;
  display: flex;
  padding: 0;
  align-items: center;
  justify-content: space-between;
  color: white;
  p {
    font-size: 16px;
    margin-top: 12px;
    margin-left: 20px;
  }
  span {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    overflow: none;
    width: 20%;
    height: 100%;
    box-sizing: border-box;
    background-color: #008300;
    svg {
      margin-top: 12px;
    }
  }
  &:hover {
    background-color: #008300;
    transition: 0.2s;
    span {
      background-color: #027a02;
    }
  }
`;

export const Payments = styled.div`
  width: 90%;
  margin: 0 auto;

  .formas-de-pagamento {
    display: flex;
    justify-content: space-between;
    button {
      border: none;
      padding: 8px 16px;
      font-size: 18px;
      font-weight: 400;
      border-radius: 8px;
      color: white;
      background-color: #364f6b;

      margin: 0 auto;
    }
    button:hover {
      transition: 0.2s ease-out;
      background-color: #263c54;
    }
  }
`;

export const SelectPayment = styled.div`
  font-size: 18px;
  width: 80%;
  margin: 0 auto;
  margin-top: 24px;
  display: flex;
  justify-content: space-between;

  option {
    padding: 12px 12px;
  }

  svg {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
  }

  .display-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      margin-left: 20px;
    }
  }
`;
