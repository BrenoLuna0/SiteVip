import React from "react";
import Skeleton from "@material-ui/lab/Skeleton";

import { Container } from "./styles";

function RowCartMobileLoading() {
  return (
    <Container>
      <div className="row-one">
        <div>
          <Skeleton variant="rect" width={80} height={80} animation="wave" />
        </div>
        <div>
          <Skeleton
            variant="text"
            width={"100%"}
            height={80}
            animation="wave"
          />
        </div>
      </div>
      <div className="row-two">
        <div>
          <Skeleton
            variant="text"
            width={"100%"}
            height={80}
            animation="wave"
          />
        </div>
        <div>
          <Skeleton
            variant="text"
            width={"100%"}
            height={80}
            animation="wave"
          />
        </div>
        <div>
          <Skeleton
            variant="text"
            width={"100%"}
            height={80}
            animation="wave"
          />
        </div>
      </div>
      <div className="row-threee">
        <Skeleton variant="text" width={"100%"} height={80} animation="wave" />
      </div>
    </Container>
  );
}

export default RowCartMobileLoading;
