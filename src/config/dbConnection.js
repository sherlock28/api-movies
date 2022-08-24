const dbConfig = require("./dbConfig");
const { Pool } = require("pg");

const connect = async () => {
	return await new Pool(dbConfig);
}

const disconnect = (pool) => {
	return pool.end();
}

module.exports = {
	connect,
	disconnect
}
