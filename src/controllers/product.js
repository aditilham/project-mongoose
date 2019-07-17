const Product = require("../models/product");

module.exports = {
  getProduct: (req, res) => {
    Product.find({})
      .then(data => {
        res.send({
          mesage: "Your list product",
          data
        });
      })
      .catch(error => {
        res.rend({
          mesage: "Ups failed to get your list product",
          error
        });
      });
  },
  addProduct: (req, res) => {
    const { name, product_id } = req.body; //req.body.name && req.body.product_id
    Product.create({
      name, //name: req.body.name
      product_id //product_id: product_id
    })
      .then(data => {
        res.send({
          mesage: "product added",
          data
        });
      })
      .catch(error => {
        res.rend({
          mesage: "Ups failed to add new product",
          error
        });
      });
  }
};
