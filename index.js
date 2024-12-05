
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser');
const cors = require("cors");
const { dbconnection } = require("./config/dbConnection");
const { apiRouter } = require('./routes');
const port = 2000;

// Middleware for CORS
app.use(cors({
  credentials: true,
  origin: true
}));

// Middleware for cookies and JSON parsing
app.use(cookieParser());
app.use(express.json());

// API Routes
app.use('/api', apiRouter);

// MongoDB Database Connection
dbconnection().catch(error => {
  console.error("Failed to connect to the database:", error.message);
  process.exit(1); // Exit process on connection error
});

// Start the Express Server
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
