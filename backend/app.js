import express from "express";

import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import subscriptionroutes from "./routes/subscriptionroutes.js";
const app = express();
app.use(express.json());
app.get("/", (request, response) => {
  return response.status(234).send("Welcome to the MERN boilerplate backend");
});

//! Routing

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);
app.use("/contacts", contactRoutes);
app.use("/subscriptions", subscriptionroutes);
//* ------------------------------------

//! centralized error handling middleware
import { errorHandler } from "./middleware/errorMiddleware.js";
app.use(errorHandler);
//* ------------------------------------

export default app;
