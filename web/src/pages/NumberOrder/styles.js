import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  height: 60vh;
  background-color: white;
  border-radius: 8px;

  .span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30%;
  }
  .text {
    margin-top: 40px;
    text-align: center;
  }

  .see-details {
    width: 60%;
    margin: 50px auto;
    padding: 6px 12px;
    background-color: #171d4b;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 400;
    text-decoration: none;
    color: white !important;
  }

  .see-details:hover {
    background-color: #38507a;
    transition: 0.2s ease-out;
  }
`;
