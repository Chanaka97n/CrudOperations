const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

/// import routes
const postRoutes = require("./routes/posts.js");

//app middleware
app.use(express.json());
app.use(cors());

app.use(postRoutes);

const port = 8000;
const DB_URL =
  "mongodb+srv://Chanaka:Chanaka123@cluster0.kaipc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log("DB conneection error", err));

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
