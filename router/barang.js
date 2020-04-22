const express = require("express");
const router = express.Router();

const controllers = require('../controllers');

router
  .route("/")
  .get(controllers.barang.getSemuaBarang)
  .post(controllers.barang.addBarang);

router
  .route("/:id")
  .get(controllers.barang.getSatuBarang)
  .patch(controllers.barang.updateBarang)
  .delete(controllers.barang.deleteBarang);

module.exports = router;
