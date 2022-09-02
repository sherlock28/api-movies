const { connect, disconnect } = require("../../config/dbConnection");
const { encryptPassword } = require("../../utils/encryptPassword");
const { HttpStatusCode } = require("../../const/statusCodes");
const { makeResponse } = require("../../utils/makeResponse");

const register = async (req, res) => {
	const pool = await connect();

	const { username, email, password } = req.body;

	const encryptedPass = await encryptPassword(password);

	try {
		const queryResponse = await pool.query('INSERT INTO schemamovies.users(username, email, password) VALUES($1, $2, $3) RETURNING "idUsers", "username", "email"', [username, email, encryptedPass]);

		const newUser = queryResponse.rows;

		return res.status(HttpStatusCode.OK).json(makeResponse(newUser, true, 'user registered successfully.', null));
	} catch (err) {
		console.error(err.detail);
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'something went wrong.', err.detail));
	} finally {
		disconnect(pool);
	}
};

module.exports = register;
