require('dotenv').config();
const jwt = require('jsonwebtoken');

exports.Authenticate = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization && authorization.split(' ')[1];

  if (token === null) return res.status(401);

  return jwt.verify(token, process.env.JWT_SECRET, (error, result) => {
    if (error) {
      res.status(403).json({
        status: 403,
        message: error,
      });
    }

    req.payload = result;

    if (result) {
      next();
    }
  });
};
