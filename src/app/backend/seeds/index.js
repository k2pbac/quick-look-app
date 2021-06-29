const mongoose = require("mongoose");
const Product = require("../models/product");
const seeds = require("./seeds");

mongoose.connect(
  "mongodb+srv://kris:bIgt9rmcYbJvmQr6@cluster0.ihfm4.mongodb.net/quick-look?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const seedDB = async () => {
  await Product.deleteMany({});

  for (const el of seeds) {
    const product = new Product({
      productName: el.productName,
      description: el.description,
      imagePath: el.imagePath,
    });
    await product.save();
  }
};

seedDB();
