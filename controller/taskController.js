const { Item } = require("../model/taskModel");

const addItems = async (req, res) => {
  try {
    const { vehicle, item } = req.body;

    // Validate the input
    if (!vehicle || !item) {
      return res
        .status(400)
        .json({ message: "Vehicle and item fields are required." });
    }

    // Create a new item
    const newItem = new Item({ vehicle, item });

    // Save the item to the database
    await newItem.save();

    res
      .status(201)
      .json({ message: "Item added successfully.", item: newItem });
  } catch (error) {
    console.error("Error adding item:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const getAllItems = async (req, res) => {
  try {
    const items = await Item.find();

    if (items.length === 0) {
      return res.status(404).json({ message: "No items found." });
    }

    res.status(200).json({ message: "Items retrieved successfully.", items });
  } catch (error) {
    console.error("Error retrieving items:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const editItem = async (req, res) => {
  try {
    const { id } = req.params; // Get the item ID from the URL
    const { vehicle, item } = req.body; // Get fields to update

    if (!vehicle && !item) {
      return res
        .status(400)
        .json({
          message: "Provide at least one field to update (vehicle or item).",
        });
    }

    const updatedItem = await Item.findByIdAndUpdate(
      id,
      { vehicle, item },
      { new: true, runValidators: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: "Item not found." });
    }

    res
      .status(200)
      .json({ message: "Item updated successfully.", item: updatedItem });
  } catch (error) {
    console.error("Error editing item:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedItem = await Item.findByIdAndDelete(id);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found." });
    }

    res
      .status(200)
      .json({ message: "Item deleted successfully.", item: deletedItem });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

module.exports = { addItems, getAllItems, editItem, deleteItem };
