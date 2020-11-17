import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Skeleton from "@material-ui/lab/Skeleton";

import { useAxios } from "../../hooks/useAxios";
import { AiOutlineArrowDown } from "react-icons/ai";
import { Container, Wrapper, ContainerProduct, InfoDAV } from "./styles";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SlideDown from "../../components/SlideDown";

function MyAccount() {
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const { data: pedidos, error } = useAxios(
    `/getAllPurchases?clieCod=${sessionStorage.getItem("codigo")}&page=${page}`
  );
  console.log(pedidos);

  if (!pedidos) {
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
            {pedidos?.dav.davPaginate.map((item) => {
              return (
                <>
                  <ContainerProduct>
                    <h3>Pedido {item.DAV_CODIGO}</h3>
                    <span onClick={() => setIsVisible(!isVisible)}>
                      <h4>Ver detalhes</h4>
                      <AiOutlineArrowDown size={20} />
                    </span>
                  </ContainerProduct>
                  <SlideDown isVisible={isVisible}>
                    <h2>Agora vai!!</h2>
                  </SlideDown>
                </>
              );
            })}
          </div>
        </div>
        <Wrapper>
          <ReactPaginate
            containerClassName="pagination-container"
            pageCount={pedidos?.dav.davTotalPages}
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
