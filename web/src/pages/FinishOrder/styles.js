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
  .button-buy-footer {
    padding-bottom: 10px;
  }
`;

export const SelectPayment = styled.div`
  width: 60%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
  div {
    background-color: white;
    border: 1px solid #efefef;
    padding: 1em;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
  }

  .active {
    background-color: #364f6b;
    color: white;
  }
`;

export const Payment = styled.div`
  width: 90%;
  margin: 14px auto;
  h3 {
    font-size: 24px;
  }
  padding-bottom: 14px;

  section {
    display: flex;
    justify-content: space-between;
  }

  .multipayment {
    h3 {
      font-size: 20px;
      margin-top: 5px;
    }
    select {
      text-align: center;
      width: 80%;
    }
    input {
      width: 80%;
      padding: 3px;
    }
  }

  @media (max-width: 800px) {
    .multipayment {
      display: grid;
      grid-template-columns: 1fr;
      gap: 20px;
    }
    .onepayment {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3 {
        margin-bottom: 12px;
        margin-top: 12px;
      }
    }
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
