const {
	Pool
} = require('pg');
const {
	user,
	password,
	host,
	port,
	database
} = require('../secrets/db_config.js');

const pool = new Pool({
	host,
	port,
	user,
	password,
	database,
});

module.exports = pool;