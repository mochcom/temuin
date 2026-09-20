const express = require("express");
const router = express.Router();
const itemController = require("../controllers/itemController");

// GET /api/items?gedung=...&kategori=...  → E-Katalog dengan filter
router.get("/", itemController.getAllItems);

// GET /api/items/:id → detail satu barang
router.get("/:id", itemController.getItemById);

module.exports = router;
