const express = require('express');

const App = express();

// eslint-disable-next-line import/order
const db = require('./src/Config/knex.config');

const knex = require('knex')(db);

const { Model } = require('objection');

const Routers = require('./src/Routers');

const PORT = process.env.PORT || 4000;

Model.knex(knex);
App.use('/', Routers);

// Allow Origin
App.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

App.listen(PORT, () => {
  console.log(`Listening Port ${PORT}`);
});
