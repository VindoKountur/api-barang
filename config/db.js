const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // LOCALHOST
    // const conn = await mongoose.connect('mongodb://localhost/warong', {useNewUrlParser: true, useUnifiedTopology: true});
    console.log(`MongoDB connected host : ${conn.connection.host}`);
  } catch (err) {
    console.log(`Error connecting : ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
