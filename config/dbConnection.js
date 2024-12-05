const mongoose = require("mongoose"); // Import the mongoose

const dbconnection = async () => {
  try {
    await mongoose.connect("mongodb+srv://javidprsnlact:2akEzCmRqBL5WK09@cluster0.5lqmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Database connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { dbconnection };
