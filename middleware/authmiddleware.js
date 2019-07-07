const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  // get token from header
  const token = req.header("x-auth-token");

  if (!token) {
    return res
      .status(401)
      .json({ msg: "Authorization is denied, no token in request" });
  }

  // decode token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    // later on req.user can be accessed
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Cannot authorize: " + error.message });
  }
};
