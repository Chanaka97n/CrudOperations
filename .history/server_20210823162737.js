const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 8000;
const DB_URL =
  "mongodb+srv://Chanaka:Chanaka123@cluster0.kaipc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB conneection error", err));

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
