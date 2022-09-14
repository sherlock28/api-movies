const getMovieById = (req, res) => {
	res.status(200).json({
		msg: "getMovieById"
	});
}

module.exports = getMovieById;
