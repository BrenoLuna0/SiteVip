import styled from "styled-components";

export const Container = styled.div`
  * {
    box-shadow: none !important;
  }
  .dropdown {
    box-shadow: none !important;
    padding: 4px;
    .btn-primary {
      background-color: #171d4b;
      border-color: #171d4b;
    }

    *:active {
      background-color: white;
      border-color: #171d4b;
    }

    .btn-primary.focus,
    .btn-primary:focus {
      box-shadow: none !important;
    }
    svg {
      margin-top: 0px;
      margin-right: 5px;
    }
  }

  @media (max-width: 890px) {
    display: none;
  }
`;
