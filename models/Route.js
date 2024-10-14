const mongoose = require("mongoose");

const routeSchema = new mongoose.Schema(
  {
    routeId: { type: String, unique: true, required: true },
    orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
    steps: [{ location: String, timestamp: Date }],
    status: {
      type: String,
      enum: ["pending", "in-progress", "completed"],
      default: "pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Route", routeSchema);
