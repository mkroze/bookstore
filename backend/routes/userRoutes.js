import express from "express";
const router = express.Router();
import {
  getAllusers,
  saveNewuser,
  updateUser,
  deleteUser,
  getOneUser,
} from "../controllers/userController.js";

//* route to save a new user
router.post("/", saveNewuser);

//* route to get all users
router.get("/", getAllusers);

//* route to get a specific user
router.get("/:id", getOneUser);
//* route to update a user
router.put("/:id", updateUser);
//* route to delete a user
router.delete("/:id", deleteUser);

export default router;
