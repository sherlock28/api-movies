const { Router } = require("express");
const { createMovie, deleteMovie, updateMovie, getMovies, getMovieById } = require("../controllers/movies");

const routes = Router();

routes.post("/movies", createMovie);
routes.put("/movies/:id", updateMovie);
routes.delete("/movies/:id", deleteMovie);
routes.get("/movies", getMovies);
routes.get("/movies/:id", getMovieById);

module.exports = routes;
