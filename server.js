const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API health endpoint
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ok',
    app: 'fitbit',
    timestamp: new Date().toISOString()
  });
});

// Root welcome page
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Fitbit Express Server</title>
      <style>
        body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #0d1117;
          color: #c9d1d9;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .card {
          background: #161b22;
          border: 1px solid #30363d;
          padding: 2.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
          max-width: 420px;
        }
        h1 {
          color: #58a6ff;
          margin-top: 0;
          font-size: 1.8rem;
        }
        p {
          color: #8b949e;
          font-size: 1rem;
          line-height: 1.5;
        }
        .badge {
          display: inline-block;
          background: #238636;
          color: #ffffff;
          padding: 0.35rem 0.8rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        code {
          background: #21262d;
          padding: 0.2rem 0.5rem;
          border-radius: 6px;
          color: #79c0ff;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="badge">Running on localhost:${PORT}</div>
        <h1>Fitbit Express Server</h1>
        <p>Your Node.js & Express server is active and running successfully!</p>
        <p>Check the API endpoint at <code>/api/status</code></p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Fitbit server is running on http://localhost:${PORT}`);
  console.log(`API endpoint available at http://localhost:${PORT}/api/status`);
});
