import styled from "styled-components";

export const Container = styled.footer`
  background-color: white;
  width: 100%;
  margin-top: 50px;
  padding-bottom: 10px;
  div {
    padding-bottom: 8px;
    padding-top: 8px;
  }

  div h2 {
    margin: 0 auto;
    text-align: center;
    margin-top: 12px;
    color: #808080;
    font-size: 22px;
    margin-left: 12px;
    margin-bottom: 4px;
    width: 90%;
    border-bottom: 1px solid #d3d3d3;
  }
  ul {
    list-style: none;
  }

  p {
    text-align: center;
  }

  .contact li {
    display: flex;
    align-items: center;
    span {
      margin-right: 5px;
    }
    font-size: 14px;
    text-align: center;
  }

  .social {
    margin-left: 0 !important;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 5px;
    }
  }

  .copy {
    margin-top: 20px;
    margin-bottom: 10px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerLinks = styled.div`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;
