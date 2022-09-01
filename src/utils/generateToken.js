const jwt = require("jsonwebtoken");

const generateToken = (user) => {
	return jwt.sign({
		id: user.idUsers,
		username: user.username,
		email: user.email
	},
		process.env.JWT_SECRET_KEY,
		{ expiresIn: process.env.JWT_EXPIRES_IN });
}

module.exports = { generateToken };
