const jwt = require("jsonwebtoken");

// set token secret and expiration date
const secret = process.env.JWT_SECRET || "my local secret";
const expiresIn = process.env.JWT_EXPIRES_IN || "2h";

const signToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn });
};

const verifyToken = (token) => {
  return jwt.verify(token, secret, { maxAge: expiresIn });
};

module.exports = {
  signToken,
  verifyToken,
};
