const { connect, disconnect } = require("../../config/dbConnection");
const { encryptPassword } = require("../../utils/encryptPassword");

const register = async (req, res) => {
	const pool = await connect();

	const { username, email, password } = req.body;

	const encryptedPass = await encryptPassword(password);

	try {
		const queryResponse = await pool.query('INSERT INTO schemamovies.users(username, email, password) VALUES($1, $2, $3) RETURNING "idUsers", "username", "email"', [username, email, encryptedPass]);

		const newUser = queryResponse.rows;

		res.json({
			data: newUser,
			success: true,
			message: "user registered successfully.",
			error: null
		});
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
};

module.exports = register;
