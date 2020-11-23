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

  .img-flex {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const ContainerDetailsVip = styled.div`
  height: 120px;
  width: 100%;
  margin: 20px auto;
  border-radius: 8px;
  background-color: white;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid black;
    svg {
      margin-right: 8px;
    }
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      h4 {
        font-size: 18px;
        margin-top: 14.5px;
        margin-bottom: 0px;
      }
      h4:nth-child(3) {
        margin-top: 12px;
      }
      p {
        color: #666;
        font-weight: 500;
        margin-bottom: 0px;
        font-size: 18px;
      }
    }
  }

  @media (max-width: 900px) {
    div {
      svg {
        width: 36px;
        height: 36px;
      }
      span {
        h4 {
          font-size: 15px;
        }

        p {
          font-size: 14px;
        }
      }
    }
  }
  @media (max-width: 700px) {
    div {
      flex-direction: column;
      svg {
        width: 28px;
        height: 28px;
      }
      span {
        h4 {
          font-size: 13px;
        }

        p {
          font-size: 11px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    div {
      svg {
        width: 22px;
        height: 22px;
      }
      span {
        h4 {
          font-size: 11px;
        }

        p {
          font-size: 10px;
        }
      }
    }
  }
`;
