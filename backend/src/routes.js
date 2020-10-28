const routes = require("express").Router();

const ProdutoController = require("./controllers/ProdutoController");
const CategoriaController = require("./controllers/CategoriaController");
const UsuarioController = require("./controllers/UsuarioController");
const FilialController = require("./controllers/FilialController");
const CarrinhoController = require("./controllers/CarrinhoController");
const VendaController = require("./controllers/VendaController");
const auth = require("./services/auth");

routes.get("/", (req, res) => {
  res.json({
    message: "Meu alegre coração palpita por um universo de esperança",
  });
});

routes.post("/login", UsuarioController.login);

routes.get("/products", auth, ProdutoController.index);

routes.get("/products/:prodCodigo", auth, ProdutoController.show);

routes.get("/rand", auth, ProdutoController.random);

routes.get("/categories", auth, CategoriaController.index);

routes.get("/filial", FilialController.index);

routes.get("/cart", auth, CarrinhoController.index);

routes.get("/search", ProdutoController.search);

routes.get("/cart/:filial/:codigo/:prodCodigo", auth, CarrinhoController.show);

routes.post("/cart", auth, CarrinhoController.insert);

routes.put(
  "/cart/:filial/:codigo/:prodCodigo",
  auth,
  CarrinhoController.update
);

routes.delete(
  "/cart/:filial/:codigo/:prodCodigo",
  auth,
  CarrinhoController.delete
);

routes.post("/checkout", auth, VendaController.insert);

module.exports = routes;
