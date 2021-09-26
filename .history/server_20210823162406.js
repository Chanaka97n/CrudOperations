const express = require("express");

const app = express();

const port = 8000;
const DB_URL =
  "mongodb+srv://Chanaka:Chanaka123@cluster0.kaipc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
