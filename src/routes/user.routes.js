const { Router } = require("express");
const { register, login } = require("../controllers/auth");

const routes = Router();

routes.post("/auth/register", register);
routes.post("/auth/login", login);

module.exports = routes;
