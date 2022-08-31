const { Router } = require("express");
const { register, login } = require("../controllers/auth");
const validateUserData = require("../middlewares/validateUserData");
const validateUserDataLogin = require("../middlewares/validateUserDataLogin");

const routes = Router();

routes.post("/auth/register", validateUserData, register);
routes.post("/auth/login" , validateUserDataLogin, login);

module.exports = routes;
