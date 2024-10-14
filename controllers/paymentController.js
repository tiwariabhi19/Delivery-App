const Order = require("../models/Order");
const Driver = require("../models/Driver");
const Route = require("../models/Route");

const calculatePayment = async (req, res) => {
  try {
    const { driverId } = req.params;
    const driverRoutes = await Route.find({
      "steps.driverId": driverId,
    }).populate("orderId");

    let totalPayment = 0;
    driverRoutes.forEach((route) => {
      totalPayment += route.orderId.totalAmount * 0.1; // Assuming 10% of order total as driver's payment
    });

    res.status(200).json({ driverId, totalPayment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { calculatePayment };
