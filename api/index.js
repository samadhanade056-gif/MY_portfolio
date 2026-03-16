import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Set up PostgreSQL connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:[YOUR-PASSWORD]@db.ylxsbmifiadhbbyyhmss.supabase.co:5432/postgres',
  ssl: {
    rejectUnauthorized: false
  }
});

// Initialize the Database Table if it doesn't exist
const initDB = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS messages (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await pool.query(createTableQuery);
    console.log('✅ PostgreSQL Connected: Messages table initialized.');
  } catch (err) {
    console.error('❌ PostgreSQL Initialization Error:', err);
  }
};

initDB();

// --- ROUTES ---

// Health Check
app.get('/api', (req, res) => {
  res.json({ message: 'Portfolio API Backend (PostgreSQL) is running.' });
});

// Submit a contact form message
app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: "Please fill in all fields" });
    }

    const insertQuery = `
      INSERT INTO messages (name, email, message) 
      VALUES ($1, $2, $3) 
      RETURNING *;
    `;
    const result = await pool.query(insertQuery, [name, email, message]);
    
    console.log(`New message saved from ${name}`);
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error('Save message error:', error);
    res.status(500).json({ success: false, error: 'Database Server Error' });
  }
});

// Get all messages
app.get('/api/messages', async (req, res) => {
  try {
    const selectQuery = 'SELECT * FROM messages ORDER BY created_at DESC;';
    const result = await pool.query(selectQuery);
    res.status(200).json({ success: true, data: result.rows });
  } catch (error) {
    console.error('Fetch messages error:', error);
    res.status(500).json({ success: false, error: 'Database Server Error' });
  }
});

if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Database API Server running on http://localhost:${PORT}`);
  });
}

export default app;
