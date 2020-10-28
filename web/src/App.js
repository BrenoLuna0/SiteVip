import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./global.css";
import Routes from "./routes";
import { SWRConfig } from "swr";
import { fetcher } from "./services/api";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <SWRConfig fetcher={fetcher}>
        <Routes />
      </SWRConfig>
      <ToastContainer
        position="top-center"
        hideProgressBar
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
      />
    </>
  );
}

export default App;
