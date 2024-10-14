const Driver = require("../models/Driver");

const createDriver = async (req, res) => {
  try {
    const { name, email, phone, vehicleType } = req.body;
    const driver = new Driver({
      driverId: Math.random().toString(36).substr(2, 6),
      name,
      email,
      phone,
      vehicleType,
    });
    await driver.save();
    res.status(201).json(driver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getDrivers = async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.status(200).json(drivers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateDriver = async (req, res) => {
  try {
    const { driverId } = req.params;
    const updatedDriver = await Driver.findByIdAndUpdate(driverId, req.body, {
      new: true,
    });
    res.status(200).json(updatedDriver);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteDriver = async (req, res) => {
  try {
    const { driverId } = req.params;
    await Driver.findByIdAndDelete(driverId);
    res.status(200).json({ message: "Driver deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createDriver, getDrivers, updateDriver, deleteDriver };
