import React from "react";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { isSignedIn } from "./services/auth";

import Login from "./pages/Login";
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

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/login-empresa" component={LoginEnterprise} />

        <Route exact path="/" render={(props) => <Main />} />
        <Route exact path="/minha-conta" render={(props) => <MyAccount />} />
        <Route
          exact
          path="/products"
          render={(props) => <Products {...props} />}
        />
        <Route
          exact
          path="/products/:prodCodigo"
          render={(props) => <DetailsProduct />}
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
          path="/pesquisar/:name"
          render={(props) => <SearchResult />}
        />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
