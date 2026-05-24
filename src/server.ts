import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./config/db";
import authRouter from "./routes/auth.route";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
// Middleware
app.use(express.json());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
