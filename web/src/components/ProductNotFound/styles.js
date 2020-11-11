import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  height: 80vh;
  background-color: white;
  border-radius: 8px;
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
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
