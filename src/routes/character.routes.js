const { Router } = require("express");
const { createCharacter, deleteCharacter, updateCharacter, getCharacters, getCharacterById } = require("../controllers/characters");

const routes = Router();

routes.post("/characters", createCharacter);
routes.put("/characters/:id", updateCharacter);
routes.delete("/characters/:id", deleteCharacter);
routes.get("/characters", getCharacters);
routes.get("/characters/:id", getCharacterById);

module.exports = routes;
