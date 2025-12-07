const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.)
app.use(express.static('public'));

// Home route with registration form
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Registration Form</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(to right, #6a11cb, #2575fc);
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.3);
          text-align: center;
          width: 350px;
        }
        h1 {
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        input[type="text"], input[type="email"], input[type="password"] {
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border-radius: 8px;
          border: none;
        }
        button {
          padding: 12px 20px;
          margin-top: 20px;
          width: 100%;
          font-size: 1em;
          color: #6a11cb;
          background: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: 0.3s;
        }
        button:hover {
          background: #e0e0e0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Register</h1>
        <form action="/register" method="POST">
          <input type="text" name="name" placeholder="Full Name" required>
          <input type="email" name="email" placeholder="Email" required>
          <input type="password" name="password" placeholder="Password" required>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </body>
    </html>
  `);
});

// Handle form submission
app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  console.log(`New Registration: ${name}, ${email}`);
  res.send(`
    <h1>Registration Successful!</h1>
    <p>Welcome, ${name} 🎉</p>
    <a href="/">Go Back</a>
  `);
});

// Start server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
