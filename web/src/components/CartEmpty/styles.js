import styled from "styled-components";

export const Container = styled.div``;

export const CarEmpty = styled.div`
  background-color: white;
  width: 90%;
  height: 600px;
  margin: 20px auto;
  border-radius: 8px;
  box-shadow: 14px 15px 20px -20px rgba(0, 0, 0, 0.75);
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
