const Route = require("../models/Route");

const createRoute = async (req, res) => {
  try {
    const { orderId, steps } = req.body;
    const route = new Route({
      routeId: Math.random().toString(36).substr(2, 6),
      orderId,
      steps,
    });
    await route.save();
    res.status(201).json(route);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRoutes = async (req, res) => {
  try {
    const routes = await Route.find().populate("orderId");
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRoute = async (req, res) => {
  try {
    const { routeId } = req.params;
    const updatedRoute = await Route.findByIdAndUpdate(routeId, req.body, {
      new: true,
    });
    res.status(200).json(updatedRoute);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRoute = async (req, res) => {
  try {
    const { routeId } = req.params;
    await Route.findByIdAndDelete(routeId);
    res.status(200).json({ message: "Route deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createRoute, getRoutes, updateRoute, deleteRoute };
