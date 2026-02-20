const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");
// const authRoutes = require("./routes/authRoutes");

app.use(cors());

require("dotenv").config();

const PORT = process.env.PORT | "8000";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", userRoutes);
// app.use("/admins", authRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
