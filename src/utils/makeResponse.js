const makeResponse = (data, success, message, error) => {
	return {
		data,
		success,
		message,
		error,
	}
}

module.exports = { makeResponse };
