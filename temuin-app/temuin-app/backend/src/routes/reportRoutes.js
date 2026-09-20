const express = require("express");
const router = express.Router();
const reportController = require("../controllers/reportController");

// POST /api/report → kirim Formulir Lapor Cepat
router.post("/", reportController.createReport);

module.exports = router;
