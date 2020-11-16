import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 60%;
  padding-top: 35px;
  margin: auto;
  background-color: white;
  border-top: 2px solid #666;
  box-shadow: 14px 15px 20px -20px rgba(0, 0, 0, 0.75);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .pagination-container {
    list-style: none;
    display: inline-flex;
  }
  li {
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
    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  li:hover {
    background-color: #0003;
  }
  .selected {
    background-color: #0002;
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
`;

export const InfoDAV = styled.div``;
