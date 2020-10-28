const connection = require("../connection");
const { response } = require("express");

module.exports = {
  async index(req, res) {
    const filiais = await connection("SIAC_TS.VW_FILIAL")
      .select("FIL_CODIGO", "FIL_NOME")
      .orderBy("FIL_CODIGO", "asc")
      .catch((err) => {
        console.log(err);
        return false;
      });
    if (filiais === false) return res.status(500).json({ error: true });
    return res.status(200).json(filiais);
  },
};
