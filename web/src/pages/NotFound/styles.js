import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  background-color: white;
  box-shadow: 14px 15px 20px -20px rgba(0, 0, 0, 0.75);
  height: 80vh;
  border-radius: 8px;
  margin: 5px auto;
  overflow: none;

  .container-interno {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    padding-top: 14vh;
    margin: 0 auto;
    img {
      width: 50%;
      height: 50%;
      object-fit: cover;
    }
    .infos {
      p {
        margin-top: 12px;
        font-size: 18px;
      }
      ul li {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 1300px) {
    height: 60vh;
  }

  @media (max-width: 1000px) {
    .container-interno {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        display: none;
      }
    }
  }
`;

export const Suggestion = styled.div`
  width: 80%;
  margin: 8px auto;
  h2 {
    text-align: center;
    color: white;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  @media (max-width: 1000px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 650px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
`;
