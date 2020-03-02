const mongoose = require('mongoose');

const BarangSchema = new mongoose.Schema({
  id : {
    type : String,
    required : [true, 'ID wajib dimasukkan']
  },
  nama : {
    type : String,
    required : [true, 'Nama barang harus ada']
  },
  harga : {
    type : Number,
    required : [true, 'Harga barang harus ada']
  }
});

module.exports = mongoose.model('Barang', BarangSchema);