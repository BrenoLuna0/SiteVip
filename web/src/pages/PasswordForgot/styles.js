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
  .copy {
    color: #666 !important;
    position: absolute;
    bottom: 5px;
  }

  .email {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 1.2em;
    label {
      font-size: 18px;
      font-weight: 600;
    }
    input {
      width: 90%;
      border-radius: 8px;
      border: 1px solid #666;
      padding: 8px;
    }
  }

  .confirm-email {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerBody = styled.div`
  width: 40%;
  background-color: white;
  margin: 20vh auto;
  height: 55vh;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  -webkit-box-shadow: 6px 6px 16px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 6px 6px 16px -2px rgba(0, 0, 0, 0.75);
  box-shadow: 6px 6px 16px -2px rgba(0, 0, 0, 0.75);

  .explain {
    font-weight: 400;
    text-align: center;
    font-size: 18px;
  }

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
