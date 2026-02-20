const fs = require("fs");
const path = require("path");

const FILE_PATH = path.join(__dirname, "../data/productList.json");

function readList() {
  const data = fs.readFileSync(FILE_PATH);
  return JSON.parse(data);
}

function writeList(data) {
  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
}

exports.getlist = (req, res) => {
  const data = readList();
  res.status(200).json(data);
};

exports.updatelist = async (req, res) => {
  try {
    const oldList = readList();

    const {
      id,
      name,
      price,
      quantity,
      category,
      collections,
      description,
      rating,
      return_allowed,
      image_url,
    } = req.body;

    const newObj = {
      id: id,
      name: name,
      price: price,
      currency: "INR",
      quantity: quantity,
      category: category,
      collections: collections,
      description: description,
      rating: rating,
      return_allowed: return_allowed,
      image_url: image_url,
    };

    oldList.products.push(newObj);
    writeList(oldList);

    res.status(200).json({
      message: "Successfully updated product list!",
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};
