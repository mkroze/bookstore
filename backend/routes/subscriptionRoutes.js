import express from "express";
const router = express.Router();

import {
  getAllSubscriptions,
  getOneSubscription,
  saveNewSubscription,
  updateSubscription,
  deleteSubscription,
} from "../controllers/subscriptionController";


router.get("/subscriptions", getAllSubscriptions);
router.get("/subscriptions/:id", getOneSubscription);
router.post("/subscriptions", saveNewSubscription);
router.put("/subscriptions/:id", updateSubscription);
router.delete("/subscriptions/:id", deleteSubscription);
