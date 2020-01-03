const mongoose = require('mongoose');

const ProductSchema = ({
  text: {
    type: String,
    required: 'Enter the name of product',
  },
  bought: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Product', ProductSchema);
