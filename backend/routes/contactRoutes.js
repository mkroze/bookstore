import {
  getAllMessages,
  getOneMessage,
  saveNewMessages,
  editMessage,
  deleteMessage,
} from "../controllers/contactController";
import express from "express";
const router = express.Router();

router.get("/messages", getAllMessages);
router.get("/messages/:id", getOneMessage);
router.post("/messages", saveNewMessages);
router.put("/messages/:id", editMessage);
router.delete("/messages/:id", deleteMessage);
