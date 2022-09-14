const getMovies = (req, res) => {
	res.status(200).json({
		msg: "getMovies"
	});
}

module.exports = getMovies;
