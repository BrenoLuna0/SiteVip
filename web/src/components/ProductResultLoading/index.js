import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Container } from "./styles";

function ProductResultLoading() {
  return (
    <Container>
      <div>
        <Skeleton variant="rect" width={80} height={80} animation="wave" />
      </div>
      <div>
        <Skeleton variant="text" width={"100%"} height={80} animation="wave" />
      </div>
      <div className="price">
        <Skeleton variant="text" width={70} height={50} animation="wave" />
        <Skeleton variant="text" width={100} height={50} animation="wave" />
      </div>
    </Container>
  );
}

export default ProductResultLoading;
