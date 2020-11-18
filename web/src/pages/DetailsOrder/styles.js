import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 80vh;
  background-color: white;
  margin: 5px auto;
  h3 {
    padding-top: 16px;
    text-align: center;
  }
`;

export const DetailsPayment = styled.div`
  width: 80%;
  margin: 32px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  h5 {
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
`;

export const DetailsProducts = styled.div``;

export const Card = styled.div`
  width: 80%;
  margin: 0 auto;
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
    h1 {
      margin-left: 12px;
      font-size: 18px;
    }
  }
`;
