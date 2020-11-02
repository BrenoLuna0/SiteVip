import styled from "styled-components";

export const Container = styled.div`
  p {
    color: #aaaa;
    cursor: pointer;
  }
  p:hover {
    color: #bbbb;
    transition: 0.2s;
    text-decoration: underline;
  }
`;

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  text-align: center;
  div {
    margin-bottom: 50px;
  }
  div img {
    width: 60px;
    height: 60px;
  }
`;

export const Table = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  text-align: center;
`;
