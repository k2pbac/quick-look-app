const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ProductRoutes = require("./routes/products");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose
  .connect(
    "mongodb+srv://kris:bIgt9rmcYbJvmQr6@cluster0.ihfm4.mongodb.net/quick-look?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((err) => {
    console.log(err + " connection failed!");
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/", ProductRoutes);

app.get("*", (req, res) => {
  res.send("hello");
});

module.exports = app;
