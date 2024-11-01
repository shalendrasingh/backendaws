const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

const cors = require("cors");
// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: "*" }));
// Routes

app.use("/api", (req, res) => {
  return res.status(200).json({
    message: "Welcome to my world!",
  });
});
// app.use("/api/businesses", businessRoutes);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
