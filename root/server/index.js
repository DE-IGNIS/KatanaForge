const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./routes/userRoutes");

app.use(
  cors({
    origin: "https://katanaforge-frontend.onrender.com",
  }),
);

require("dotenv").config();

const PORT = process.env.PORT || "5000";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", userRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "Alive" });
});

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
