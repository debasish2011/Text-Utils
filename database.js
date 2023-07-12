const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env"});
const url = process.env.MONGO_LINK || "mongodb://127.0.0.1:27017/textutils";

const connectMongo = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectMongo;
