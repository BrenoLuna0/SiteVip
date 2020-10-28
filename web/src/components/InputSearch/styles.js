import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;

  form {
    display: flex;
    input {
      padding: 6px;
      width: 100%;
      border: 1px solid black;
      outline: none;
    }
  }

  .button-input {
    border-radius: 0%;
    padding: 6px;
    background-color: #22314a;
  }
  .bg-hover :hover {
    background-color: #38507a;
    transition: 0.2s;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`;
