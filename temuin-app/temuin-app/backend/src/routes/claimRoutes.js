const express = require("express");
const router = express.Router();
const claimController = require("../controllers/claimController");

// POST /api/claim/verify → cek jawaban kuis verifikasi
router.post("/verify", claimController.verifyClaim);

module.exports = router;
