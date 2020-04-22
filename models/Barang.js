const mongoose = require('mongoose');

const BarangSchema = new mongoose.Schema({
  nama : {
    type : String,
    required : [true, 'Nama barang harus ada']
  },
  harga : {
    type : Number,
    required : [true, 'Harga barang harus ada']
  },
  barcode: {
    type: String,
    required: true,
  }
});

const Barang = mongoose.model('Barang', BarangSchema);

module.exports = Barang;