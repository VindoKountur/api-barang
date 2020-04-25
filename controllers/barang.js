const Models = require('../models/');

// @desc  Get all barang
// @route GET /api/barang

async function getSemuaBarang(req, res, next) {
  try {
    const limit = Number(req.query.limit);
    const search = req.query.search;
    const like = {
      nama: new RegExp(search, 'i'),
    };
    const semuaBarang = await Models.Barang.find(like ? like : null).limit(
      limit ? limit : 50
    );
    return res.status(200).json({
      success: true,
      count: semuaBarang.length,
      data: semuaBarang,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
    });
  }
}

// @desc  Get 1 barang
// @route GET /api/barang/:id
async function getSatuBarang(req, res, next) {
  try {
    const idBarang = req.params.id;
    const barang = await Models.Barang.findById(idBarang);

    if (!barang) {
      return res.status(404).json({
        success: false,
        error: 'Data tidak ditemukan',
      });
    }

    return res.status(201).json({
      success: true,
      data: barang,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error',
      message: err,
    });
  }
}

// @desc  Add barang
// @route POST /api/barang

async function addBarang(req, res, next) {
  try {
    const { nama, harga, barcode } = req.body;

    const barang = await Models.Barang.create(req.body);

    return res.status(201).json({
      success: true,
      data: barang,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    }
    return res.status(500).json({
      success: false,
      error: 'Server error, idk',
    });
  }
}

// @desc Update barang
// @route /api/barang/:id

async function updateBarang(req, res, next) {
  try {
    const idBarang = req.params.id;
    const barang = await Models.Barang.updateOne({ _id: idBarang }, {}).set(
      req.body
    );

    return res.status(201).json({
      success: true,
      data: barang,
    });
  } catch (err) {
    return res.status(404).json({
      success: false,
      error: 'Update gagal',
      message: err,
    });
  }
}

// @desc  Delete barang
// @route /api/barang/:id

async function deleteBarang(req, res, next) {
  try {
    const idBarang = req.params.id;
    const barang = await Models.Barang.findById(idBarang);

    if (!barang) {
      return res.status(404).json({
        success: false,
        error: 'Data tidak ditemukan',
      });
    }

    await barang.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error, idk',
    });
  }
}

module.exports = {
  getSemuaBarang,
  getSatuBarang,
  addBarang,
  updateBarang,
  deleteBarang,
};
