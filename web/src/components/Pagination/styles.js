import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border-radius: 99px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border: none;
  color: #3b3b3b;
  margin: 16px 4px;
  outline: none;
  transition: all 0.1s;
  user-select: none;
  &.active {
    background-color: #0002;
  }
  &:active {
    background-color: #0003;
  }
`;
