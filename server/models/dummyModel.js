const { Pool } = require('pg');

const PG_URI = 'postgres://nzxetijk:Qvbfyu...@queenie.db.elephantsql.com:5432/nzxetijk';

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};