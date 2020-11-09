import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { Container } from "./styles";

function RowCartLoading() {
  return (
    <Container>
      <td width="20%" className="center">
        <Skeleton variant="rect" width={80} height={80} animation="wave" />
      </td>
      <td width="50%">
        <Skeleton variant="text" width={"100%"} height={80} animation="wave" />
      </td>
      <td>
        <Skeleton variant="text" width={50} height={80} animation="wave" />
      </td>
      <td>
        <Skeleton variant="text" width={50} height={80} animation="wave" />
      </td>
      <td>
        <Skeleton variant="text" width={50} height={80} animation="wave" />
      </td>
    </Container>
  );
}

export default RowCartLoading;
