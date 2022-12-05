const Products = require("../models/products");


exports.getProducts = (req, res, next) => {
  Products.find()
    .then((response) =>
      res.status(200).json(response)
    )
    .catch((error) =>
      res.status(404).json(error)
    )

}


exports.postProducts = (req, res, next) => {
  let product = new Products(req.body)
  product.save()
    .then((response) =>
      res.status(201).json(response)
    )
    .catch((err) =>
      res.status(404).json(err)
    )
}
