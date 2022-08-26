const { Router } = require("express");
const { register, login } = require("../controllers/auth");
const validateUserData = require("../middlewares/validateUserData");

const routes = Router();

routes.post("/auth/register", validateUserData, register);
routes.post("/auth/login", login);

module.exports = routes;
