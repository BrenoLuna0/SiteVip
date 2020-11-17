import styled from "styled-components";

export const Container = styled.div``;

export const Inner = styled.div`
  &:before,
  &:after {
    content: "";
    display: table;
  }
`;
