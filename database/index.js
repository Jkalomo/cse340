const { Pool } = require('pg');

// Parse the Render PostgreSQL URL into connection config
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false }  // Required for Render's SSL
});

// Optional: Test the connection on startup
pool.connect((err, client, release) => {
  if (err) {
    console.error('Error connecting to PostgreSQL on Render:', err.stack);
  } else {
    console.log('Successfully connected to PostgreSQL on Render');
    release();
  }
});

module.exports = pool;