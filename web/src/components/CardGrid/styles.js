import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  background-color: white;
  display: grid;
  grid-template-rows: 40% 25% 8% 10%;
  border-radius: 6px;
  border: 1px solid black;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: 11px 10px 35px -26px rgba(0, 0, 0, 0.75);
  padding: 2px;
  width: 100%;
  height: 100%;
  text-align: center;

  img {
    margin-top: 3px;
    width: 160px;
    height: 160px;
    border: 0.2px solid grey;
  }

  h3 {
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
  }

  p {
    font-weight: bold;
    text-align: center;
    font-size: 18px;
    color: green;
  }

  button {
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    width: 80% !important;
    p {
      text-align: center;
      font-size: 14px;
      color: white;
    }
  }

  @media (max-width: 420px) {
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 20px;
    }
    a {
      display: flex;
      justify-content: center;
    }
  }
  .details {
    color: grey;
    margin-bottom: 6px;
  }
`;

export const ImageDiv = styled.div`
  width: 90%;
  margin: 0 auto;
  a {
    display: flex;
    justify-content: center;
  }
`;
