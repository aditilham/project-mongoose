const router = require("express").Router();

const orderController = require("../controllers/order")

router.get("/", orderController.getOrder)
router.post("/", orderController.addOrder)
router.get("/details", orderController.getOrderDetails)

module.exports = router