const getCharacters = (req, res) => {
	res.status(200).json({
		msg: "getCharacters"
	});
}

module.exports = getCharacters;
