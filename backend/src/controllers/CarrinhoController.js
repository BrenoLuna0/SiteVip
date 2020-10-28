const connection = require("../connection");

module.exports = {
  async index(req, res) {
    const cartProducts = await connection("SITE_CARRINHO")
      .where("FIL_CODIGO", req.query.filial || 0)
      .andWhere("CLIE_CODIGO", req.query.codigo || 0)
      .select("PROD_CODIGO", "PROD_QTD")
      .catch((err) => {
        console.log(err);
        return false;
      });

    if (cartProducts === false) return res.status(500).json({ error: true });
    if (cartProducts.length === 0)
      return res.status(404).json({ error: "Nenhum produto encontrado." });

    const promiseProducts = cartProducts.map(async (product) => {
      const info = await connection("SIAC_TS.VW_PRODUTO")
        .where("PROD_CODIGO", product.PROD_CODIGO)
        .select("PROD_DESCRICAO", "PROD_PRECO_VENDA", "PROD_QTD_ATUAL")
        .first();
      return {
        PROD_CODIGO: product.PROD_CODIGO,
        PROD_QTD: product.PROD_QTD,
        PROD_DESCRICAO: info.PROD_DESCRICAO,
        PROD_PRECO_VENDA: info.PROD_PRECO_VENDA,
        PROD_QTD_ATUAL: info.PROD_QTD_ATUAL,
      };
    });

    let detailedProducts;
    await Promise.all(promiseProducts).then(function (results) {
      detailedProducts = results;
    });

    const promisedImageProducts = detailedProducts.map(async (product) => {
      const info = await connection("SIAC_TS.VW_PRODUTO_IMAGEM")
        .where("PROD_CODIGO", product.PROD_CODIGO)
        .select("PROD_IMAG_NOME");

      return {
        PROD_CODIGO: product.PROD_CODIGO,
        PROD_QTD: product.PROD_QTD,
        PROD_DESCRICAO: product.PROD_DESCRICAO,
        PROD_PRECO_VENDA: product.PROD_PRECO_VENDA,
        PROD_QTD_ATUAL: product.PROD_QTD_ATUAL,
        PROD_IMAG: info,
      };
    });

    let imageProducts;

    await Promise.all(promisedImageProducts).then(function (results) {
      imageProducts = results;
    });

    return res.status(200).json(imageProducts);
  },

  async show(req, res) {
    const result = await connection("SITE_CARRINHO")
      .where({
        FIL_CODIGO: req.params.filial,
        CLIE_CODIGO: req.params.codigo,
        PROD_CODIGO: req.params.prodCodigo,
      })
      .select("PROD_QTD")
      .catch((err) => {
        console.log(err);
        return false;
      });

    if (result === false) return res.status(500).json({ error: true });
    if (result.length === 0) return res.status(404).json({ error: true });
    return res.status(200).json(result);
  },

  async insert(req, res) {
    const product = await connection("SITE_CARRINHO")
      .where("FIL_CODIGO", req.body.filial)
      .andWhere("CLIE_CODIGO", req.body.codigo)
      .andWhere("PROD_CODIGO", req.body.prodCodigo)
      .select("PROD_QTD")
      .catch((err) => {
        console.log(err);
        return false;
      });

    if (product === false) {
      return res.status(500).json({ error: true });
    }
    if (product.length === 0) {
      const result = await connection("SITE_CARRINHO")
        .insert({
          FIL_CODIGO: req.body.filial,
          CLIE_CODIGO: req.body.codigo,
          PROD_CODIGO: req.body.prodCodigo,
          PROD_QTD: req.body.prodQtd,
        })
        .returning("*")
        .catch((err) => {
          console.log(err);
          return false;
        });

      if (result === false) return res.status(500).json({ error: true });
      return res.status(200).json(result);
    }
    const result = await connection("SITE_CARRINHO")
      .where({
        FIL_CODIGO: req.body.filial,
        CLIE_CODIGO: req.body.codigo,
        PROD_CODIGO: req.body.prodCodigo,
      })
      .update({
        PROD_QTD: parseInt(req.body.prodQtd) + parseInt(product[0].PROD_QTD),
      })
      .catch((err) => {
        console.log(err);
        return false;
      });

    if (result === false) return res.status(500).json({ error: true });
    return res.status(200).json(result);
  },

  async update(req, res) {
    const result = await connection("SITE_CARRINHO")
      .where({
        FIL_CODIGO: req.params.filial,
        CLIE_CODIGO: req.params.codigo,
        PROD_CODIGO: req.params.prodCodigo,
      })
      .update({
        PROD_QTD: req.body.prodQtd,
      })
      .catch((err) => {
        console.log(err);
        return false;
      });

    if (result === false) return res.status(500).json({ error: true });
    return res.status(200).json(result);
  },

  async delete(req, res) {
    const result = await connection("SITE_CARRINHO")
      .where({
        FIL_CODIGO: req.params.filial,
        CLIE_CODIGO: req.params.codigo,
        PROD_CODIGO: req.params.prodCodigo,
      })
      .del()
      .returning("*")
      .catch((err) => {
        console.log(err);
        return false;
      });

    if (result === false) return res.status(500).json({ error: true });
    return res.status(200).json(result);
  },
};
