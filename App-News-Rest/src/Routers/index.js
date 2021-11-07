const express = require('express');

const Routers = express();

// Authenticate Config
const { Authenticate } = require('../Config/Authenticate');

// Auth Path
const {
  AuthRegisterController,
  AuthLoginController,
} = require('../Controllers/Auth');

Routers.post('/api/auth/register', AuthRegisterController);

Routers.post('/api/auth/login', AuthLoginController);

// Dashboard Path
const { DashboardController } = require('../Controllers/Dashboard');

Routers.get('/api/my/profile', DashboardController);

// News Path
const {
  NewsInsertController,
  NewsAllController,
  NewsByIdController,
} = require('../Controllers/News');

Routers.get('/api/all/news', NewsAllController);

Routers.get('/api/news/:user_id', NewsByIdController);

Routers.post('/api/post/news', Authenticate, NewsInsertController);

module.exports = Routers;
