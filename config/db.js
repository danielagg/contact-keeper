const mongoose = require("mongoose");
const config = require("config");

const dbConnectionString = config.get("mongoDbConnectionString");

const connectDb = async () => {
  try {
    await mongoose.connect(dbConnectionString, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("Connected to Mongo DB");
  } catch (ex) {
    console.log(ex);
    process.exit(1);
  }
};

module.exports = connectDb;
