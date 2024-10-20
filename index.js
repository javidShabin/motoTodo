require('dotenv').config();
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')
const cors = require("cors");
const { dbconnection } = require("./config/dbConnection");
const { apiRouter } = require('./routes');
const port = 2000;

app.use(cors({
  credentials: true,
  origin: "https://task-management-to-do-git-main-javid-shabins-projects.vercel.app"
}));
app.use(cookieParser())
app.use(express.json());

app.use('/api', apiRouter)

// Mogobd databse connection string
dbconnection();

// Create a server in express
app.listen(port, () => {
  console.log(`The server running in port ${port}`);
});
