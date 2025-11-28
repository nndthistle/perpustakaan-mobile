const jwt = require("jsonwebtoken");

exports.authRequired = (req, res, next) => {
  const header = req.headers["authorization"];
  
  if (!header) return res.status(401).json({ message: "No token provided" });

  const token = header.split(" ")[1]; // "Bearer token"

  if (!token) return res.status(401).json({ message: "Invalid token format" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // inject ke req
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid or expired" });
  }
};