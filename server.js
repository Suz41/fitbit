const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve static frontend files (index.html, styles.css, dist/app.js)
app.use(express.static(__dirname));

// Health / status API endpoint
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    app: 'fitbit',
    timestamp: new Date().toISOString()
  });
});

// Explicit root route serving index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Fitbit Dashboard server is running on http://localhost:${PORT}`);
  console.log(`Status API available at http://localhost:${PORT}/api/status`);
});
