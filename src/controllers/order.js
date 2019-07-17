const Order = require("../models/order");

module.exports = {
  getOrder: (req, res) => {
    Order.find({})
      .then(data => {
        res.send({
          mesage: "Your list order",
          data
        });
      })
      .catch(error => {
        res.rend({
          mesage: "Ups failed to get your list order",
          error
        });
      });
  },
  addOrder: (req, res) => {
    const { status, product_id } = req.body; //req.body.name && req.body.product_id
    Order.create({
      status, //name: req.body.name
      product_id //product_id: product_id
    })
      .then(data => {
        res.send({
          mesage: "order added",
          data
        });
      })
      .catch(error => {
        res.rend({
          mesage: "Ups failed to add new order",
          error
        });
      });
  },
  getOrderDetails: (req, res) => {
    Order.aggregate([
      {
        $lookup: {
          from: "products",
          localField: "product_id",
          foreignField: "product_id",
          as: "orderdetails"
        }
      }
    ])
    .then(data => {
      res.send(data);
    })
    .catch(error => {
      res.send(error)
    })
  }
};
