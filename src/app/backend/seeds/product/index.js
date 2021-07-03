const mongoose = require("mongoose");
const seeds = require("./seeds");
const Product = require("../../models/product");

mongoose.connect(process.env.DB_URL || "mongodb://localhost:27017/quick-look", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

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
      category: el.category,
      description: el.description,
      imagePath: el.imagePath,
      likes: el.likes,
    });
    await product.save();
  }
};

seedDB();
