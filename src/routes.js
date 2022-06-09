const { Router } = require('express');

const UserController = require('./app/Controllers/UserController')

const routers = new Router();

routers.post("/", UserController.index);

module.exports = routers;