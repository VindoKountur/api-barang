const express = require("express");
const router = express.Router();

const {
  getSemuaBarang,
  addBarang,
  deleteBarang
} = require("../controllers/barang");

router
  .route("/")
  .get(getSemuaBarang)
  .post(addBarang);

router
  .route("/:id")
  .delete(deleteBarang);

module.exports = router;
