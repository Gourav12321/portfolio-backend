// server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import adminRoutes from "./Routes/Routes.js";
import cors from "cors";
import path from "path";

const app = express();
dotenv.config();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://portfolio-frontend-eight-blue.vercel.app",
      "http://localhost:5173",
      "https://www.gouravdev.me",
    ],
    credentials: true,
  })
);
// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.error("Error connecting to database:", error));

// Route middleware
app.use("/api/admin", adminRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the app for Vercel
export default app;
