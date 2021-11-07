require('dotenv').config();

const jwt = require('jsonwebtoken');

const generatedAccessToken = (email) => jwt.sign(email, process.env.JWT_SECRET, { expiresIn: '30d' });

module.exports = generatedAccessToken;
