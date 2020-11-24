import styled from "styled-components";

export const Container = styled.div`
  background-image: url("/images/img-login.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  width: 100%;
  overflow: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .copy {
    color: #666 !important;
    position: absolute;
    bottom: 5px;
  }
`;

export const ContainerBody = styled.div`
  width: 60%;
  min-height: 500px;
  background-color: white;

  .pj-pf {
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    gap: 20px;

    span {
      padding: 6px 12px;
      background-color: #171d4b;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 3px;
      font-weight: 500;
    }
    div {
      display: flex;
    }
    div label {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin-right: 10px;
      p {
        margin-left: 5px;
      }
    }
  }
`;

export const ContainerFields = styled.div`
  width: 70%;
  margin: 12px auto;

  input {
    width: 70%;
  }

  div {
    margin-bottom: 5px;
  }
  div p {
    margin-bottom: 2px;
  }
  div span {
    color: red;
  }

  .double-fields {
    display: flex;
    input {
      width: 100% !important;
    }
    div {
      margin-right: 20px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    height: 60px;
    background-color: #171d4b;
    width: 180px;
    color: white;
    font-weight: 500;
  }

  button:hover {
    background-color: #2f3b99;
  }
`;
