import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Skeleton from "@material-ui/lab/Skeleton";

import { useAxios } from "../../hooks/useAxios";
import { Container, Wrapper, ContainerProduct } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContainerDAV from "../../components/ContainerDAV";

function MyAccount() {
  const [page, setPage] = useState(1);
  const [active, setActive] = useState(false);

  const { data: dav, error } = useAxios(
    `/allDavs?clieCod=${sessionStorage.getItem("codigo")}&page=${page}`
  );

  if (!dav) {
    return (
      <>
        <Header />
        <Container>
          <div>
            <h1 style={{ textAlign: "center", marginTop: "12px" }}>
              Meus pedidos
            </h1>
            <div className="container-produtos">
              <ContainerProduct>
                <Skeleton variant="rect" width={"80%"} height={50} />
              </ContainerProduct>
              <ContainerProduct>
                <Skeleton variant="rect" width={"80%"} height={50} />
              </ContainerProduct>
              <ContainerProduct>
                <Skeleton variant="rect" width={"80%"} height={50} />
              </ContainerProduct>
              <ContainerProduct>
                <Skeleton variant="rect" width={"80%"} height={50} />
              </ContainerProduct>
              <ContainerProduct>
                <Skeleton variant="rect" width={"80%"} height={50} />
              </ContainerProduct>
              <ContainerProduct>
                <Skeleton variant="rect" width={"80%"} height={50} />
              </ContainerProduct>
              <ContainerProduct>
                <Skeleton variant="rect" width={"80%"} height={50} />
              </ContainerProduct>
            </div>
          </div>
        </Container>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <h1 style={{ textAlign: "center", marginTop: "12px" }}>
            Meus pedidos
          </h1>
          <div className="container-produtos">
            {dav?.davPaginate.map((item, index) => (
              <ContainerDAV
                id={item.DAV_CODIGO}
                subtotal={parseFloat(item.DAV_SUB_TOTAL)}
                key={index}
              />
            ))}
          </div>
        </div>
        <Wrapper>
          <ReactPaginate
            containerClassName="pagination-container"
            pageCount={dav?.davTotalPages}
            initialPage={page - 1}
            previousLabel="<"
            nextLabel=">"
            pageRangeDisplayed={2}
            marginPagesDisplayed={2}
            disableInitialCallback={true}
            onPageChange={(value, event) => {
              const pageValue = value.selected + 1;
              setPage(pageValue);
            }}
          />
        </Wrapper>
      </Container>
      <Footer />
    </>
  );
}

export default MyAccount;
