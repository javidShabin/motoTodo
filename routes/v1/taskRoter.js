const express = require("express")
const { addItems, editItem, deleteItem, getAllItems } = require("../../controller/taskController")
const router = express()

router.post("/addItems", addItems)
router.get("/getAllItems", getAllItems)
router.put("/editItems", editItem)
router.delete("/deleteItems", deleteItem)

module.exports = {taskRouter: router}