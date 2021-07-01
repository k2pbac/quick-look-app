const mongoose = require("mongoose");
const Category = require("../../models/category");
const seeds = require("./seeds");

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
  await Category.deleteMany({});

  for (const el of seeds) {
    const category = new Category({
      categoryName: el.categoryName,
      imagePath: el.imagePath,
    });
    await category.save();
  }
};

seedDB();
