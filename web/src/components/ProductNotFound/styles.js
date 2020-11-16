import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  height: 70vh;
  background-color: white;
  border-radius: 8px;

  .back {
    margin-left: 12px;
    padding-top: 12px;
    font-size: 20px;
    display: flex;
    align-items: center;
    a {
      color: black !important;
    }
    svg {
      margin-right: 6px;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 22vh;
    div p {
      font-size: 24px;
      font-weight: 500;
      text-align: center;
    }
    div :nth-child(1) {
      margin-right: 40px;
    }
  }
`;
