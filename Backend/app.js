require("dotenv").config({ path: "./config.env" });

const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/mail", require("./routes/mailRoutes"));

app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("EMAIL:", process.env.EMAIL_USER);
console.log("PASS:", process.env.EMAIL_PASS);

  console.log(`Server running on port ${PORT}`);
});
