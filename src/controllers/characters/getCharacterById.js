const getCharacterById = (req, res) => {
	res.status(200).json({
		msg: "getCharacterById"
	});
}

module.exports = getCharacterById;
