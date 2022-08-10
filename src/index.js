const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        "name": "API Movies",
        "description": "Example CRUD API Movies",
        "version": "V1"
    });
});

app.listen(3000, () => {
    console.log("Server listening on 3000");
});
