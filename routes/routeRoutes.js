const express = require("express");
const {
  createRoute,
  getRoutes,
  updateRoute,
  deleteRoute,
} = require("../controllers/routeController");
const { authMiddleware } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", authMiddleware, createRoute);
router.get("/", authMiddleware, getRoutes);
router.put("/:routeId", authMiddleware, updateRoute);
router.delete("/:routeId", authMiddleware, deleteRoute);

module.exports = router;
