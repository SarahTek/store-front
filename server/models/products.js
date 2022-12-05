const mongoose = require('mongoose') //.Schema
const Schema = mongoose.Schema;

const productsSchema = new Schema({
  products: [
    {
      category_name: { type: String },
      category_description: { type: String },
      product_name: { type: String },
      product_description: { type: String },
      price: { type: Number },
      inventory_count: { type: Number }
    }
  ],

  cart: []

});

module.exports = mongoose.model('Products', productsSchema);
