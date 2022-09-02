const { connect, disconnect } = require("../../config/dbConnection");
const { HttpStatusCode } = require("../../const/statusCodes");
const { makeResponse } = require("../../utils/makeResponse");
const { validatePassword } = require("../../utils/validatePassword");
const { generateToken } = require("../../utils/generateToken");

const login = async (req, res) => {
	const pool = await connect();

	let { username, password } = req.body;

	try {
		const queryResponse = await pool.query(`SELECT "idUsers", "username", "email", "password" FROM schemamovies.users WHERE "username"=$1::text AND "deleted"=false;`, [username]);

		const user = queryResponse.rows[0];

		if (user === undefined) {
			return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'username or password are invalid.', 'invalid credentials.'));
		}

		const isCorrectPass = await validatePassword(password, user.password);

		if (!isCorrectPass) {
			return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'username or password are invalid.', 'invalid credentials.'));
		}

		const token = generateToken(user);

		await pool.query(`UPDATE schemamovies.users SET "token"=$1 WHERE "idUsers"=$2;`, [token, user.idUsers]);

		return res.status(HttpStatusCode.OK).json(makeResponse(token, true, 'user logged successfully.', null));

	} catch (err) {
		console.error(err.detail);
		return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'something went wrong.', err.detail));
	} finally {
		disconnect(pool);
	}
}

module.exports = login;
