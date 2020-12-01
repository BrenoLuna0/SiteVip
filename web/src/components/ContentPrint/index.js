import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
  },
  header: {
    marginTop: 24,
    textAlign: "center",
  },
  div: {
    display: "grid",
    marginTop: "20px",
  },
  typePayment: {
    fontSize: "20px",
    color: "#666",
  },
});

const ContentPrint = (props) => {
  const data = props;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text>DETALHAMENTO DO PEDIDO {data.idDav}</Text>
        </View>
        <View style={styles.grid}>
          {data.methodPaymentFiltred.map((item) => {
            return (
              <View>
                {console.log(item)}
                <Text style={styles.typePayment}>{item}</Text>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

export default ContentPrint;
