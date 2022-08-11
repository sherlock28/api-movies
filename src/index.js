require("dotenv").config();
const express = require("express");
const configureApp = require("./config/app");

const app = configureApp(express());

app.listen(app.get("port"), () => {
    console.log(`Server listening on ${app.get("port")}`);
});
