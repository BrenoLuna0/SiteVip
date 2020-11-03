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
`;

export const ContainerBody = styled.div`
  width: 60%;
  background-color: white;
  margin: 20vh auto;
  height: 60vh;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 6px 6px 16px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 16px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 16px -2px rgba(0, 0, 0, 0.75);
  .img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      margin-top: 30px;
      margin-bottom: 30px;
      width: 80px;
      height: 80px;
    }
  }

  .new-user {
    margin-top: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-size: 18px;
    }

    p:nth-child(1) {
      margin-right: 10px;
    }
    .bold {
      font-weight: 600;
    }
  }

  .return {
    margin-left: 24px;
    padding-top: 18px;
    display: flex;
    cursor: pointer;
    align-items: center;
    span {
      font-size: 18px;
      margin-left: 5px;
      font-weight: 500;
    }
  }
  .return:hover {
    text-decoration: underline;
    color: #364f6b;
    transition: 0.3s ease-in-out;
  }
`;

export const Inputs = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
`;

export const InputCnpj = styled.div`
  label {
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
  }
  input {
    border-radius: 8px;
    outline: none;
    border: 1px solid #d3d3d3;
    padding: 2px;
    width: 100%;
    font-size: 18px;
  }
`;

export const InputPassword = styled.div`
  margin-top: 5px;
  label {
    font-size: 18px;
    font-weight: 500;
    margin-right: 2px;
  }
  input {
    border-radius: 8px;
    outline: none;
    border: 1px solid #d3d3d3;
    padding: 2px;
    width: 100%;
    font-size: 18px;
  }

  .w-filial {
    margin-bottom: 10px;
  }
`;

export const LoginButton = styled.button`
  border: none;
  padding: 16px 50px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  color: white;
  background-color: #364f6b;
  width: 40%;
  margin: 0 auto;
  &:hover {
    transition: 0.2s ease-out;
    background-color: #263c54;
  }
`;

export const ContainerLogin = styled.div`
  width: 80%;
  margin: 0 auto;
  .remember-password a {
    margin-bottom: 10px;
    display: flex !important;
    justify-content: right;
    align-items: center;
    p {
      margin-top: 20px;
    }
    span {
      margin-right: 5px;
    }
  }
`;
