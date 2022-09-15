const { makeResponse } = require('../../utils/makeResponse');
const { HttpStatusCode } = require('../../const/statusCodes');

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

function validateUserData(req, res, next) {
	const { username, email, password, confirmpass } = req.body;

	if (username === undefined || email === undefined || password === undefined || confirmpass === undefined) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'username, email, password or confirmpass are missing.', 'username, email, password or confirmpass are required.'));
	}

	if (username.length === 0) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'username length is 0.', 'username is required.'));
	}

	if (email.length === 0) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'email length is 0.', 'email is required.'));
	}

	if (password.length === 0) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'password length is 0.', 'password is required.'));
	}

	if (confirmpass.length === 0) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'confirmpass length is 0.', 'confirmpass is required.'));
	}

	if (username.length < 6) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'username must be at least 6 chars long.', 'username is less than 6 chars.'));
	}

	if (password.length < 8) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'password must be at least 6 chars long.', 'password is less than 6 chars.'));
	}

	if (password != confirmpass) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'password and confirmpass must be the same.', 'password not match.'));
	}

	if (email.toString().match(emailRegex) === null) {
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'email is not valid.', 'invalid email.'));
	}

	next();
}

module.exports = validateUserData;
