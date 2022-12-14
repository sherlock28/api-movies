const express = require("express");
const { userRoutes, characterRoutes, movieRoutes } = require("../routes");

function configureApp(app) {

	app.set("port", process.env.PORT);

	app.use(express.json());

	if(process.env.NODE_ENV === 'development') {
		const morgan = require("morgan");
		app.use(morgan('dev'));
	}

	app.get("/", (req, res) => {
		res.json({
			"name": "API Movies",
			"description": "Example CRUD API Movies",
			"version": "V1"
		});
	});

	app.use("/api", userRoutes);
	app.use("/api", characterRoutes);
	app.use("/api", movieRoutes);

	return app;
}

module.exports = configureApp;
