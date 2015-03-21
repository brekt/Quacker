module.exports = {
	development: {
		debug: true,
		client: 'postgres',
		connection: {
		host     : process.env.APP_DB_HOST     || 'HEROKU_POSTGRESQL_ROSE_URL',
		user     : process.env.APP_DB_USER     || '',
		password : process.env.APP_DB_PASSWORD || '',
		database : process.env.APP_DB_NAME     || 'quacker'
		}
	}
};