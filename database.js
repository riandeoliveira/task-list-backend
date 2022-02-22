const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI || "mongodb://localhost/taskListDB";

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("Database connection successfully");
  })
  .catch((err) => {
    console.log("Databse connection fail");
    console.log(err);
  });
