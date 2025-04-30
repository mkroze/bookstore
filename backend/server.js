import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectToDatabase } from "./config/db.js";
const PORT = process.env.PORT || 5555;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ App failed to start due to DB connection error.");
  });