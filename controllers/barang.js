const Barang = require('../models/Barang');

// @desc  Get all barang
// @route GET /api/barang

exports.getSemuaBarang = async (req, res, next) => {
  try {
    const semuaBarang = await Barang.find();

    return res.status(200).json({
      success : true,
      count : semuaBarang.length,
      data : semuaBarang
    });
  } catch (err) {
    return res.status(500).json({
      success : false,
      error : 'Server error'
    })
  }
};

// @desc  Add barang
// @route POST /api/barang

exports.addBarang = async (req, res, next) => {
  try {
    const { id, nama, harga } = req.body;

    const barang = await Barang.create(req.body);

    return res.status(201).json({
      success : true,
      data : barang
    });  
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map(val => val.message);

      return res.status(400).json({
        success : false,
        error : messages
      });
    }
    return res.status(500).json({
      success : false,
      error : 'Server error, idk'
    });
  }
  
};
// @desc  Delete barang
// @route /api/barang/:id

exports.deleteBarang = async (req, res, next) => {
  try {
    const barang = await Barang.findById(req.params.id);

    console.log(barang);

    if (!barang) {
      return res.status(404).json({
        success : false,
        error : 'Data tidak ditemukan'
      });
    }

    await barang.remove();

    return res.status(200).json({
      success : true,
      data : {}
    });

  } catch (err) {
    return res.status(500).json({
      success : false,
      error : 'Server error, idk'
    });
  }
};
