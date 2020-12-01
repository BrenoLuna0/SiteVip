import React from "react";

import { Container } from "./styles";
import { PDFViewer } from "@react-pdf/renderer";
import ContentPrint from "../../components/ContentPrint";

const PagePrint = (props) => {
  const data = props.location.state;
  return (
    <PDFViewer
      style={{ width: "100%", height: "100vh", margin: "0", padding: "0" }}
    >
      <ContentPrint {...data} />
    </PDFViewer>
  );
};

export default PagePrint;
