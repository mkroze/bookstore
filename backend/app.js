import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import userRoutes from "./routes/userRoutes.js";
const app = express();
app.use(express.json());
app.get("/", (request, response) => {

  return response.status(234).send("Welcome to the Mern Stack boy");
});

app.use("/books", bookRoutes);
app.use("/users", userRoutes);

//? ******************************************************
//! centralized error handling middleware
//? ******************************************************
import { errorHandler } from "./middleware/errorMiddleware.js";
app.use(errorHandler);
//? /////////////////////////////////////////////////////
export default app;
