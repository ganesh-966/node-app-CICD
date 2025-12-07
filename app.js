const express = require('express');
const app = express();
const port = 3000;

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Home route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Jenkins Node App</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: #fff;
          text-align: center;
          margin: 0;
          padding: 0;
        }
        h1 {
          font-size: 3em;
          margin-top: 100px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        p {
          font-size: 1.5em;
          margin-top: 20px;
        }
        .button {
          display: inline-block;
          margin-top: 40px;
          padding: 15px 30px;
          font-size: 1.2em;
          color: #6a11cb;
          background: #fff;
          border-radius: 8px;
          text-decoration: none;
          transition: 0.3s;
        }
        .button:hover {
          background: #e0e0e0;
        }
      </style>
    </head>
    <body>
      <h1>Hello from ganesh!</h1>
      <p>🎉 Your CI/CD deployment was successful.</p>
      <a class="button" href="#">Get Started</a>
    </body>
    </html>
  `);
});

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
