import styled from "styled-components";

export const Container = styled.div`
  button {
    margin: 0 auto;
    padding: 0;
    background-color: #00a200;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    justify-content: space-between;

    p {
      font-size: 16px;
      margin-top: 10px;
      margin-left: 16px;
      text-align: center;
      line-height: 18px;
    }
    span {
      background-color: #008300;
      height: 100%;
      width: 40%;
      margin: 0;
      padding-left: 6px;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      svg {
        margin-top: 12px;
        margin-right: 4px;
      }
    }
  }

  button:hover {
    background-color: #008300;
    transition: 0.2s;
    span {
      background-color: #027a02;
    }
  }
  @media (max-width: 820px) {
    button {
      p {
        font-size: 14px;
        margin-top: 12px;
        margin-right: 5px;
        text-align: center;
        line-height: 14px;
      }
    }
  }
  @media (max-width: 480px) {
    button {
      p {
        font-size: 13px;
        margin-top: 12px;
        margin-right: 5px;
        text-align: center;
        line-height: 14px;
      }
    }
  }
`;
