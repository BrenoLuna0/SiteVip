import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isSignedIn } from "./services/auth";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Products from "./pages/Products";
import DetailsProduct from "./pages/DetailsProduct";
import Cart from "./pages/Cart";
import SearchResult from "./pages/SearchResult";
import FinishOrder from "./pages/FinishOrder";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/home"
          render={(props) =>
            isSignedIn() ? <Main /> : <Redirect to={{ pathname: "/" }} />
          }
        />
        <Route
          exact
          path="/products"
          render={(props) =>
            isSignedIn() ? (
              <Products {...props} />
            ) : (
              <Redirect to={{ pathname: "/" }} />
            )
          }
        />
        <Route
          exact
          path="/products/:prodCodigo"
          render={(props) =>
            isSignedIn() ? (
              <DetailsProduct {...props} />
            ) : (
              <Redirect to={{ pathname: "/" }} />
            )
          }
        />

        <Route
          exact
          path="/finalizar-pedido"
          render={(props) =>
            isSignedIn() ? <FinishOrder /> : <Redirect to={{ pathname: "/" }} />
          }
        />

        <Route
          exact
          path="/cart"
          render={(props) =>
            isSignedIn() ? <Cart /> : <Redirect to={{ pathname: "/" }} />
          }
        />
        <Route
          exact
          path="/pesquisar/:name"
          render={(props) =>
            isSignedIn() ? (
              <SearchResult />
            ) : (
              <Redirect to={{ pathname: "/" }} />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
