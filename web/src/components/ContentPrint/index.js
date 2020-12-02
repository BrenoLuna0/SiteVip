import React from "react";
import {
  BlobProvider,
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import { numberFormat } from "../../utils/currency";
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
  },
  idDavStyle: {
    marginTop: "30px",
    fontSize: 16,
    textAlign: "center",
  },
  text: {
    color: "#353839",
    marginBottom: "8px",
    marginLeft: "4px",
    fontSize: 14,
  },
  metodosDePagamento: {
    width: "80%",
    margin: "20px auto",
    flexDirection: "row",
  },
});

const ContentPrint = ({
  idDav,
  parcelasString,
  methodPaymentFiltred,
  numParcelas,
  valorDuplicata,
  valorDinheiro,
  paymentMethod,
  itens,
}) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.idDavStyle}>DETALHAMENTO DO PEDIDO {idDav}</Text>
        </View>
        <View style={styles.metodosDePagamento}>
          <View>
            <Text style={{ fontSize: 16 }}>MÉTODO DE PAGAMENTO</Text>
            {methodPaymentFiltred.map((item) => {
              return (
                <>
                  <Text
                    style={{
                      marginTop: "10px",
                      marginBottom: "10px",
                      fontSize: 14,
                    }}
                  >
                    {item}
                  </Text>
                  {item === "DUPLICATA" && (
                    <>
                      <Text style={styles.text}>
                        INTERVALO DOS DIAS: {parcelasString}
                      </Text>
                      <Text style={styles.text}>
                        NÚMERO DE PARCELAS: {numParcelas}
                      </Text>
                      <Text style={styles.text}>
                        VALOR PAGO: {numberFormat(valorDuplicata)}
                      </Text>
                    </>
                  )}
                  {item === "DINHEIRO" && (
                    <Text style={styles.text}>
                      VALOR PAGO: {numberFormat(valorDinheiro)}
                    </Text>
                  )}
                </>
              );
            })}
          </View>
          <View style={{ marginLeft: 30, borderLeft: "3px solid #666" }}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 10,
              }}
            >
              TOTAL PAGO:
            </Text>
            <Text style={styles.text}>
              SUBTOTAL: {numberFormat(paymentMethod.currency[0].DAV_SUB_TOTAL)}
            </Text>
            <Text style={styles.text}>
              DESCONTO:{" "}
              {numberFormat(paymentMethod.currency[0].DAV_VALOR_DESCONTO)}
            </Text>
            <Text style={styles.text}>
              TOTAL: {numberFormat(paymentMethod?.currency[0].DAV_TOTAL)}
            </Text>
          </View>
        </View>

        <Text style={{ textAlign: "center", fontSize: 16 }}>PRODUTOS</Text>
        <View style={{ width: "80%", margin: "20px auto" }}>
          {itens.products.map((product) => {
            return (
              <View style={{ flexDirection: "row", marginBottom: 24 }}>
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {product.PROD_IMAG_NOME ? (
                    <Image
                      style={{ height: 80, width: 80 }}
                      src={`${process.env.REACT_APP_URL_IMG}/${product.PROD_IMAG_NOME}`}
                    />
                  ) : (
                    <Image
                      style={{ height: 80, width: 80 }}
                      src={process.env.PUBLIC_URL + "/images/no-image.png"}
                    />
                  )}
                </View>

                <View>
                  <Text style={{ fontSize: 14, marginBottom: 8 }}>
                    {product.PROD_DESCRICAO}
                  </Text>
                  <View>
                    <Text style={{ fontSize: 12, marginBottom: 4 }}>
                      QUANTIDADE: {product.QTD_ITEM}
                    </Text>
                    <Text style={{ fontSize: 12, marginBottom: 4 }}>
                      PREÇO UNITÁRIO: {numberFormat(product.PRECO_DAV_UN)}
                    </Text>
                    <Text style={{ fontSize: 12, marginBottom: 4 }}>
                      TOTAL: {numberFormat(product.PRECO_DAV_UN)}{" "}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </Page>
    </Document>
  );
};

export default ContentPrint;
