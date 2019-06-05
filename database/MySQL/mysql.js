const mysqlConnection = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'student',
    password: 'password',
    database: 'yourdatabase'
  }
});

module.exports = mysqlConnection;