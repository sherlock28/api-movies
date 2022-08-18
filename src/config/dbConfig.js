const defaultConfig = {
	pghost: "localhost",
    pgport: 5432,
    pgdatabase: "moviesdb",
    pguser: "postgres",
    pgpassword: "postgres"
};

const db_development = {
	host: process.env.DEV_PGHOST || defaultConfig.pghost,
    port: process.env.DEV_PGPORT || defaultConfig.pgport,
    database: process.env.DEV_PGDATABASE || defaultConfig.pgdatabase,
    user: process.env.DEV_PGUSER || defaultConfig.pguser,
    password: process.env.DEV_PGPASSWORD || defaultConfig.pgpassword
};

const db_production = {
	host: process.env.PGHOST || defaultConfig.pghost,
    port: process.env.PGPORT || defaultConfig.pgport,
    database: process.env.PGDATABASE || defaultConfig.pgdatabase,
    user: process.env.PGUSER || defaultConfig.pguser,
    password: process.env.PGPASSWORD || defaultConfig.pgpassword
};

module.exports = process.env.NODE_ENV === "development" ? db_development : db_production;
