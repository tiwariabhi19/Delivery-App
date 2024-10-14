const express = require("express");
const {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createOrder);
router.get("/:id", authMiddleware, getOrders);
router.put("/:orderId", authMiddleware, updateOrder);
router.delete("/:orderId", authMiddleware, deleteOrder);

module.exports = router;
