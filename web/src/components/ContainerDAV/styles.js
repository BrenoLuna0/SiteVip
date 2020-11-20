import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

export const ContainerProduct = styled.div`
  width: 80%;
  margin: 26px auto;
  padding: 16px;
  border-radius: 2px;
  border-left: 3px solid #1ebf40;
  border-bottom: 1px solid #d4d8d5;
  -webkit-box-shadow: 5px 11px 14px 1px rgba(0, 0, 0, 0.15);
  box-shadow: 5px 11px 14px 1px rgba(0, 0, 0, 0.15);

  display: flex;
  justify-content: space-around;
  span {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    h4 {
      font-size: 24px;
      font-weight: 400;
    }
    svg {
      margin-left: 6px;
    }
  }

  span:hover {
    color: #6666;
    transition: 0.2s ease-out;
  }

  .active {
    animation: ${rotate} 0.2s linear;
  }
`;

export const ContainerDetails = styled.div`
  width: 70%;
  margin: 4px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  p {
    font-size: 20px;
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }

  .link-details {
    color: #666;
    text-decoration: underline;
    cursor: pointer;
  }

  .link-details:hover {
    color: #d3d3d3;
    transition: 0.2s ease-out;
    text-decoration: underline;
  }

  .subtotal {
    p {
      color: #b22222;
      text-align: right;
    }
  }
`;
