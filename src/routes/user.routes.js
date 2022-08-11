const { Router } = require("express");

const routes = Router();

routes.post("/auth/register", (req, res) => {
    res.json({
        msg: "register"
    });
});

routes.post("/auth/login", (req, res) => {
    res.json({
        msg: "login"
    });
});

module.exports = routes;
