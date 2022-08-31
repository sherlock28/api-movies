const bcrypt = require("bcryptjs");

const validatePassword = async (password, passwordFromDb) => {
	return await bcrypt.compare(password, passwordFromDb);
}

module.exports = { validatePassword };
