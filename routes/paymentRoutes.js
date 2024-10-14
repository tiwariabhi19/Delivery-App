const express = require("express");
const { calculatePayment } = require("../controllers/paymentController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.get("/:driverId", authMiddleware, calculatePayment);

module.exports = router;
