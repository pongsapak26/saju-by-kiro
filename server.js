const express = require('express');
const mysql = require('mysql2');

const app = express();
app.use(express.json());
app.use(express.static('public'));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'saju',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
    return;
  }
  console.log('Connected to MySQL');

  const createTable = `
    CREATE TABLE IF NOT EXISTS readings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      birth_date DATE NOT NULL,
      birth_time TIME NOT NULL,
      gender ENUM('male', 'female') NOT NULL,
      year_pillar VARCHAR(10) NOT NULL,
      month_pillar VARCHAR(10) NOT NULL,
      day_pillar VARCHAR(10) NOT NULL,
      hour_pillar VARCHAR(10) NOT NULL,
      result_text TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;

  db.query(createTable, err => {
    if (err) console.error('Create table error:', err);
    else console.log('Table readings ready');
  });
});

// POST /api/readings - บันทึกผลดูดวง
app.post('/api/readings', (req, res) => {
  const { name, birthDate, birthTime, gender, yearPillar, monthPillar, dayPillar, hourPillar, resultText } = req.body;

  const sql = `INSERT INTO readings (name, birth_date, birth_time, gender, year_pillar, month_pillar, day_pillar, hour_pillar, result_text)
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [name, birthDate, birthTime, gender, yearPillar, monthPillar, dayPillar, hourPillar, resultText], (err, result) => {
    if (err) {
      console.error('Insert error:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: result.insertId, message: 'บันทึกสำเร็จ' });
  });
});

// GET /api/readings - ดึงประวัติการดูดวง
app.get('/api/readings', (req, res) => {
  db.query('SELECT * FROM readings ORDER BY created_at DESC', (err, results) => {
    if (err) {
      console.error('Query error:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
