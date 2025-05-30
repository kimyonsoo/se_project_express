// Middleware functions allow us to write our request processing code inside
// a separate module, which in turn allows for shorter code in the router itself
// It is a great place to move code that will be repeatedly executed
const jwt = require("jsonwebtoken");

const { UNAUTHORIZED } = require("../utils/errors");
const { JWT_SECRET } = require("../utils/config");

const handleAuthError = (res) => {
  res.status(UNAUTHORIZED).send("Unauthorized");
};

const extractBearerToken = (header) => header.replace("Bearer ", "");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return handleAuthError(res);
  }
  const token = extractBearerToken(authorization);
  let payload;

  try {
    payload = jwt.verify(token, JWT_SECRET);
  } catch (err) {
    return handleAuthError(res);
  }

  req.user = payload;
  next();

  return null;
};
