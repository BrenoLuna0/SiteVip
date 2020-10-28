import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: white;
  height: 160px;
  padding: 5px;

  .shopping-cart {
    margin-left: 12px;
    color: #171d4b;
  }
`;

export const SubHeader = styled.div`
  width: 90%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div svg {
    margin-right: 5px;
  }

  .exit div {
    cursor: pointer;
  }

  .exit div:hover {
    color: #212529;
    text-decoration: underline;
    transition: 0.2s;
  }
`;

export const Header = styled.header`
  width: 90%;
  margin: 28px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div:nth-child(3) {
    width: 56%;
  }

  .logo {
    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
    }
  }
  .open-menu {
    margin-left: 16px;
    cursor: pointer;
  }

  .open-menu:hover {
    color: #800000;
    transition: 0.2s;
  }

  .shopping-cart {
    cursor: pointer;
  }

  .shopping-cart:hover {
    color: #800000;
    transition: 0.2s;
  }

  @media (min-width: 890px) {
    .open-menu {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .logo {
      img {
        width: 50px;
        height: 50px;
        object-fit: cover;
      }
    }
  }
`;

export const InputSearch = styled.div`
  box-sizing: border-box;

  form {
    display: flex;
    input {
      padding: 6px;
      width: 100%;
      border: 1px solid black;
      outline: none;
    }
  }

  .button-input {
    border-radius: 0%;
    padding: 6px;
    background-color: #22314a;
  }
  .bg-hover :hover {
    background-color: #38507a;
    transition: 0.2s;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
`;

export const MenuDropDown = styled.div`
  width: 15%;
  background-color: #373a47;
  position: fixed;
  top: 0;
  right: 0;
  width: 60%;
  z-index: 50;
  height: 100%;
  padding: 2em;
  transform: translateX(100%);
  transition: all 0.2s;
  overflow-y: auto;

  nav {
    overflow-x: hidden;
  }

  div a {
    color: white !important;
    display: flex;
    flex-direction: column;
  }

  div h1 {
    color: white;
    font-size: 24px;
    margin-top: 8px;
    margin-bottom: 10px;
  }

  .link-menu {
    font-size: 18px;
    padding: 2px;
    margin-bottom: 5px;
  }

  .link-menu span {
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px;
    }
  }

  .close-button-menu {
    cursor: pointer;
    color: white;
    position: fixed;
    top: 12px;
    right: 36px;
  }

  &.active {
    transform: translateX(0);
  }

  @media (max-width: 480px) {
    div h1 {
      font-size: 18px;
    }
    .link-menu {
      font-size: 15px;
      padding: 2px;
      margin-bottom: 5px;
    }
  }
`;
