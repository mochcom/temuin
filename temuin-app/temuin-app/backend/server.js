// =============================================================
// server.js — Entry Point Aplikasi Backend TemuIn
// Status: skeleton. Route & controller sudah disiapkan
// strukturnya, logic penuh menyusul di materi backend.
// =============================================================

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const itemRoutes = require("./src/routes/itemRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const claimRoutes = require("./src/routes/claimRoutes");
const errorHandler = require("./src/middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "TemuIn API is running." });
});

app.use("/api/items", itemRoutes);
app.use("/api/report", reportRoutes);
app.use("/api/claim", claimRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`TemuIn API listening on port ${PORT}`);
});
