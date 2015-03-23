module.exports = {
	development: {
		debug: true,
		client: 'postgres',
		connection: {
		host     : process.env.APP_DB_HOST     || 'ec2-107-20-244-39.compute-1.amazonaws.com',
		user     : process.env.APP_DB_USER     || 'rbomcnbjktpcin',
		password : process.env.APP_DB_PASSWORD || 'cUB7nDq4WEtXXiy6YJDDH-Dw1M',
		database : process.env.APP_DB_NAME     || 'd33sf6u0qfn8ru'
		}
	}
};