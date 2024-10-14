const express = require("express");
const {
  createDriver,
  getDrivers,
  updateDriver,
  deleteDriver,
} = require("../controllers/driverController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { roleMiddleware } = require("../middlewares/roleMiddleware");
const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("Admin"), createDriver);
router.get("/", authMiddleware, getDrivers);
router.put("/:driverId", authMiddleware, roleMiddleware("Admin"), updateDriver);
router.delete(
  "/:driverId",
  authMiddleware,
  roleMiddleware("Admin"),
  deleteDriver
);

module.exports = router;
