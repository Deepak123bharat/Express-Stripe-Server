const mongoose = require("mongoose");
const env = require("dotenv");

module.exports = async () => {
  await mongoose.connect(
    `mongodb+srv://dsr8:${process.env.DB_PASSWORD}@cluster0.cfkc2am.mongodb.net/test?retryWrites=true&w=majority`
  );
};
