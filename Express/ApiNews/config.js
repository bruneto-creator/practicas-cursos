require('dotenv').config();

const PORT = process.env.PORT || 3000;
const DB_HOST = process.env.DB_HOST || '127.0.0.1';
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_NAME = process.env.DB_NAME || 'db_news';
const JWT_SECRET = process.env.JWT_SECRET || 'curso_api_news';

module.exports = { PORT, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, JWT_SECRET };
