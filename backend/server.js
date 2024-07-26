const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'I182028007_data1',
    password: 'Iffa@46awards',
    database: '182028007_data1'
});

db.connect(err => {
    if(err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to database.');
});

app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM your table', (err, results) => {
        if (err) {
            return res.status(500).send(err);
        }
        res.json(results);
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on port ${PORT}'));