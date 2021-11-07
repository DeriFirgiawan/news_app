require('dotenv').config();

module.exports = {
  client: 'pg',
  connection: {
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    PGHOST: process.env.DB_HOST,
    PGPORT: process.env.PGPORT,

  },
  // connection: 'postgres://nbcbooojiyxkxq:9a0b92120980d5eada8c4e55e458447252fa086dbac04d19c10f60b2f71bb785@ec2-34-226-18-183.compute-1.amazonaws.com:5432/dejr4i0m5f1hfv',
  ssl: { rejectUnauthorized: false },
  acquireConnectionTimeout: 3000,
};
