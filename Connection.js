const mongoose = require("mongoose");

const url = `mongodb+srv://${process.env.DBUsername}:${process.env.DBPassword}@wpcluster.52jyz4y.mongodb.net/wpjob`;
mongoose
 .connect(url)
 .then(() => {
  console.log("Connected to MongoDB ✅");
 })
 .catch((error) => {
  console.log("Couldnot connect to mongoDB", error);
 });
