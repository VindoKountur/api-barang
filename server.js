const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
dotenv.config({ path: "./config/config.env" });

connectDB();

const router = require('./router');

const app = express();

app.use(express.json());

app.use("/api/barang", router.barang);

app.get("/", (req, res) => {
  res.send('Ini hanya server untuk rest api, akses = /api/barang');
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server run on PORT = ${PORT}`)
);
