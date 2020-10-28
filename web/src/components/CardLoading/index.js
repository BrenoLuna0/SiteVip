import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Container } from "./styles";

function CardLoading() {
  return (
    <Container>
      <Skeleton variant="rect" width={200} height={200} animation="wave" />
      <Skeleton variant="text" width={180} height={80} animation="wave" />
      <Skeleton variant="text" width={180} height={80} animation="wave" />
    </Container>
  );
}

export default CardLoading;
