const express = require('express');
const apiRouter = express.Router();

const usersRoute = require('./users');
const productsRoute = require('./products');

apiRouter.use(usersRoute);
apiRouter.use(productsRoute);

module.exports = apiRouter