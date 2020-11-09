import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 15px auto;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  div {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-right: 10px;
  }
  .price {
    display: flex;
    flex-direction: column;
  }
`;

export const ImgDiv = styled.div`
  height: 80px;
  width: 80px;
`;
