import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isSignedIn } from "./services/auth";

import LoginEnterprise from "./pages/LoginEnterprise";
import Main from "./pages/Main";
import Products from "./pages/Products";
import DetailsProduct from "./pages/DetailsProduct";
import Cart from "./pages/Cart";
import SearchResult from "./pages/SearchResult";
import OrderFinish from "./pages/OrderFinish";
import NumberOrder from "./pages/NumberOrder";
import MyAccount from "./pages/MyAccount";
import NotFound from "./pages/NotFound";
import DetailsOrder from "./pages/DetailsOrder";
import PagePrint from "./pages/PagePrint";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginEnterprise} />

        <Route
          exact
          path="/home"
          render={(props) => (isSignedIn() ? <Main /> : <Redirect to="/" />)}
        />

        <Route
          exact
          path="/meus-pedidos"
          render={(props) =>
            isSignedIn() ? <MyAccount {...props} /> : <Redirect to="/" />
          }
        />
        <Route
          exact
          path="/meus-pedidos/:id"
          render={(props) =>
            isSignedIn() ? <DetailsOrder {...props} /> : <Redirect to="/" />
          }
        />
        <Route
          exact
          path="/products"
          render={(props) =>
            isSignedIn() ? <Products {...props} /> : <Redirect to="/" />
          }
        />

        <Route
          exact
          path="/products/:prodCodigo"
          render={(props) =>
            isSignedIn() ? <DetailsProduct /> : <Redirect to="/" />
          }
        />

        <Route
          exact
          path="/finalizar-pedido"
          render={(props) =>
            isSignedIn() ? <OrderFinish /> : <Redirect to={{ pathname: "/" }} />
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
          path="/order/:idPedido"
          render={(props) =>
            isSignedIn() ? (
              <NumberOrder {...props} />
            ) : (
              <Redirect to={{ pathname: "/" }} />
            )
          }
        />

        <Route
          exact
          path="/meus-pedidos/:idPedido/impressao"
          render={(props) =>
            isSignedIn() ? (
              <PagePrint {...props} />
            ) : (
              <Redirect to={{ pathname: "/" }} />
            )
          }
        />

        <Route
          exact
          path="/pesquisar"
          render={(props) =>
            isSignedIn() ? (
              <SearchResult {...props} />
            ) : (
              <Redirect to={{ pathname: "/" }} />
            )
          }
        />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
