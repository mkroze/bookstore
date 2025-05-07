import express from "express";
const router = express.Router();
import {
  getAllOrders,
  getOneOrder,
  saveNewOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController";

router.get("/orders", getAllOrders);
router.get("/orders/:id", getOneOrder);
router.post("/orders", saveNewOrder);
router.put("/orders/:id", updateOrder);
router.delete("/orders/:id", deleteOrder);
