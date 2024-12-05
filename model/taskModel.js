const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  vehicle: { type: String, required: true },
  item: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Item = mongoose.model("ChatMessage", itemSchema);
module.exports = { Item };
