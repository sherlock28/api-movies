const { makeResponse } = require('../../utils/makeResponse');
const { HttpStatusCode } = require('../../const/statusCodes');

function validateCreateCharacter(req, res, next) {

	if (req.body.name === undefined || req.body.name === "") {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'name is required.', 'name is missing.'));
	}

	if (req.body.image?.length > 500) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'image is too long.', ' image is greater than 500 characters.'));
	}

	if (req.body.age === undefined) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'age is required.', 'age is missing.'));
	}

	if (req.body.age <= 0) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'must be greater than 0.', 'age is invalid.'));
	}

	if (req.body.gender === undefined || req.body.gender === "") {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'gender is required.', 'gender is missing.'));
	}

	if (req.body.history?.length > 500) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'history is too long.', ' history is greater than 500 characters.'));
	}

	next();
}

module.exports = validateCreateCharacter;
