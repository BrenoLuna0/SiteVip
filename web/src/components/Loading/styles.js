import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 90%;
  margin: 20px auto;
  border-radius: 8px;
  min-height: 70vh;

  .loader {
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 130px;
    height: 130px;
    animation: spin 2s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
