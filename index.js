const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { dbconnection } = require("./config/dbConnection");
const { apiRouter } = require("./routes");
const port = 2000;

// Middleware for CORS
app.use(
  cors({
    credentials: true,
    origin: "https://todo-frontend-alpha-ashen.vercel.app",
  })
);

// Middleware for cookies and JSON parsing
app.use(cookieParser());
app.use(express.json());

// API Routes
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// MongoDB Database Connection
dbconnection();

// Start the Express Server
app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
