const { connect, disconnect } = require("../../config/dbConnection");
const { HttpStatusCode } = require("../../const/statusCodes");
const { makeResponse } = require("../../utils/makeResponse");
const { validatePassword } = require("../../utils/validatePassword");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
	try {
		const { username, password } = req.body;

		const pool = await connect();

		const queryResponse = await pool.query(`SELECT "idUsers", "username", "email", "password" FROM schemamovies.users WHERE "username"=$1::text AND "deleted"=false;`, [username]);

		const user = queryResponse.rows[0];

		if (user === undefined) {
			return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'username or password are invalid.', 'invalid credentials.'));
		}

		const isCorrectPass = await validatePassword(password, user.password);

		if (!isCorrectPass) {
			return res.status(HttpStatusCode.BAD_REQUEST).json(makeResponse(null, false, 'username or password are invalid.', 'invalid credentials.'));
		}

		const token = jwt.sign({
			id: user.idUsers,
			username: username,
			email: user.email
		},
			process.env.JWT_SECRET_KEY,
			{ expiresIn: 3600 });

		return res.status(HttpStatusCode.OK).json(makeResponse(token, true, 'user logged successfully.', null));

	} catch (err) {
		console.error(err);
		res.json({
			data: null,
			success: false,
			message: "something went wrong",
			error: err.detail
		});
	} finally {
		disconnect(pool);
	}
}

module.exports = login;
