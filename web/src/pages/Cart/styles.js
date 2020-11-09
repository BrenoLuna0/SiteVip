import styled from "styled-components";

export const ContainerAll = styled.div`
  width: 90%;
  min-height: 70vh;
  background-color: white;
  margin: 5px auto;
  box-shadow: 14px 15px 20px -20px rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  a:hover {
    outline: none !important;
    text-decoration: none !important;
  }
`;

export const Container = styled.div`
  width: 90%;
  margin: 20px auto;
  padding: 6px;
`;

export const ContainerProducts = styled.tr`
  width: 100%;
  height: 40px;
  td {
    text-align: center;
  }

  .product-container {
    display: flex;
    width: 100%;
    align-items: center;
    a {
      display: flex;
      align-items: center;
    }
    img {
      width: 110px;
      height: 110px;
      margin-right: 20px;
    }
  }

  svg {
    cursor: pointer;
  }

  .counter-product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 8px;
    border: 2px solid #e3e3e3;
    width: 150px !important;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 0;
      width: 80px !important;
      text-align: center;
      border: none;
    }
  }

  .not-available {
    cursor: default;
    color: grey;
  }
`;

export const Grid = styled.table`
  border-spacing: 0;

  thead tr th {
    text-align: center;
  }

  th {
    text-transform: uppercase;
    color: #777777;
    font-size: 14px;
  }

  td,
  th {
    padding: 16px;
    border-bottom: 1px solid #d9d9d9;
  }
  .last-table {
    button {
      padding: 4px;
      background-color: #dc143c;
      text-transform: uppercase;
    }
  }

  .quantity-name {
    text-align: left;
  }

  @media (max-width: 940px) {
    display: none;
  }
`;

export const ContainerSub = styled.div`
  margin-top: 15px;
  margin-right: 20px;
  background-color: #fcf8e3;
  display: grid;
  justify-content: center;
  border: 1px solid #eceeef;
  font-weight: 500;
`;

export const Finish = styled.button`
  margin-top: 20px;
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

export const CartMobile = styled.div`
  @media (min-width: 940px) {
    display: none;
  }

  .item-title {
    width: 100%;
    border-bottom: 1px solid #e3e3e3;
  }

  .item-title h1 {
    font-size: 22px;
  }

  .product {
    margin-left: 10px;
    margin-top: 10px;
    display: grid;
    grid-template-columns: 1fr;
    border-bottom: 1px solid #e3e3e3;
    padding-bottom: 5px;
  }

  .img {
    a {
      display: flex;
    }
    a p {
      margin-left: 24px;
      margin-top: 16px;
    }
  }

  .img img {
    width: 80px;
    height: 80px;
  }

  .center {
    margin-top: 25px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .unity,
    .subtotal {
      display: flex;
      p {
        margin-top: 18px;
        font-size: 18px;
        font-weight: 500;
      }
      p:nth-child(1) {
        margin-right: 6px;
      }
    }
  }

  .counter-product {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 10px;
    }
    padding: 0 8px;
    border: 2px solid #e3e3e3;
    width: 150px !important;
    span {
      cursor: pointer;
    }
    input {
      width: 80px !important;
      text-align: center;
      border: none;
    }
  }

  .not-available {
    cursor: default;
    color: grey;
  }

  .remove {
    button {
      background-color: #b53737;
      color: white;
      padding: 0.5em;
      font-weight: 500;
    }
    button:hover {
      background-color: #8c2a32;
      transition: 0.2s;
    }
  }

  @media (max-width: 610px) {
    .unity,
    .subtotal {
      p {
        font-size: 16px !important;
      }
    }

    .img img {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 560px) {
    .counter-product {
      width: 30% !important;
    }
    .counter-product input {
      width: 18px !important;
    }
  }

  @media (max-width: 500px) {
    .unity,
    .subtotal {
      p {
        font-size: 14px !important;
        margin-right: 4px !important;
        margin-left: 4px !important;
      }
    }
  }
`;

export const DivFooter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const DivOptions = styled.div``;
