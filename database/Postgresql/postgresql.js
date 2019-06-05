const postgresConnection = require('knex')({
  client: 'pg',
  connection: {
    user: process.env.PSQL_USER || 'student',
    host: process.env.PSQL_HOST || "127.0.0.1",
    password: process.env.PSQL_PASSWORD || "student",
    database: process.env.PSQL_DATABASENAME || "YOUR DATABASE NAME"
  }
});

module.exports = postgresConnection;