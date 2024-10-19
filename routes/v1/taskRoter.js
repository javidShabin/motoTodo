const express = require("express");
const {
  addItems,
  editItem,
  deleteItem,
  getAllItems,
  getItemById,
} = require("../../controller/taskController");
const router = express.Router(); // Correctly initialize the router

// Define routes
router.post("/addItems", addItems);
router.get("/getItemById/:id", getItemById);
router.get("/getAllItems", getAllItems);
router.put("/editItem/:id", editItem); // Added :id to handle the parameter
router.delete("/deleteItem/:id", deleteItem); // Added :id to handle the parameter

module.exports = { taskRouter: router };
