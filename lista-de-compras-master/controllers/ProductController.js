const mongoose = require('mongoose');

const Product = mongoose.model('Product');

exports.getAllProducts = function getAllProducts(req, res) {
  Product.find({}, (err, product) => {
    if (err) {
      res.send(err);
    }
    res.json(product);
  });
};

exports.createProduct = function createProduct(req, res) {
  const newProduct = new Product(req.body);
  newProduct.save((err, product) => {
    if (err) {
      res.send(err);
    }
    res.json(product);
  });
};

exports.updateProduct = function updateProduct(req, res) {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, product) => {
    if (err) {
      res.send(err);
    }
    res.json(product);
  });
};

exports.deleteProduct = function deleteProduct(req, res) {
  Product.findOneAndRemove({ _id: req.params.id }, (err, product) => {
    if (err) {
      res.send(err);
    }
    res.json(product);
  });
};
