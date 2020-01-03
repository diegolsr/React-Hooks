const mongoose = require('mongoose');

const bluebird = require('bluebird')

mongoose.Promise = require('bluebird');
require('./models/ProductModel');

module.exports = function(config) {
  const { host, port, name } = config;
  mongoose.connect(`mongodb://${host}:${port}/${name}`, { promiseLibrary: bluebird })
    .then(() => console.log('connection succesful'))
    .catch(err => console.error(err));
}
