const { makeResponse } = require('../utils/makeResponse');
const { HttpStatusCode } = require('../const/statusCodes');

function validateUserDataLogin(req, res, next) {

	const { username, password } = req.body;

	if (username === undefined || password === undefined) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'username, or password are missing.', 'username or password are required.'));
	}

	next();
}

module.exports = validateUserDataLogin;
