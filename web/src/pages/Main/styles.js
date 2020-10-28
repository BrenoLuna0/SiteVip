import styled from "styled-components";

export const Container = styled.div`
  img {
    width: 100%;
    height: 500px;
    object-fit: cover;
  }
`;

export const GridContainerProducts = styled.div`
  width: 90%;
  margin: 10px auto;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  div {
    width: 100%;
  }

  @media (max-width: 1370px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 512px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const EffectText = styled.div`
  h1 {
    color: white;
    text-align: center;
    margin-top: 10px;
    letter-spacing: 10px;
    text-transform: uppercase;
    font-weight: 400;
    text-shadow: 2px 1px 11px rgba(150, 150, 150, 0.44);
  }
`;

export const ContainerBody = styled.div`
  width: 90%;
  margin: 20px auto;
  display: grid;
`;

export const ImgPropaganda = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
  margin-top: 15px;
  img {
    width: 100%;
  }

  .two-images {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;
