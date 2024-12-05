
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
  origin: "http://localhost:5173"
}));

// Middleware for cookies and JSON parsing
app.use(cookieParser());
app.use(express.json());

// API Routes
app.use('/api', apiRouter);

// MongoDB Database Connection
dbconnection()

// Start the Express Server
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
