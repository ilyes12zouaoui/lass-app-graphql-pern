const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/secrets");

module.exports = user => {
  return jwt.sign(user, JWT_SECRET, { expiresIn: "7 days" });
};
