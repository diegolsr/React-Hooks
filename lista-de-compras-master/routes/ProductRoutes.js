const productController = require('../controllers/ProductController');

module.exports = function route(app) {
  app.route('/products')
    .get(productController.getAllProducts)
    .post(productController.createProduct);

  app.route('/products/:id')
    .put(productController.updateProduct)
    .delete(productController.deleteProduct);
};
