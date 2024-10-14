const roleMiddleware = (requiredRole) => {
  return (req, res, next) => {
    if (req.user.usertype !== requiredRole) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};

module.exports = { roleMiddleware };
