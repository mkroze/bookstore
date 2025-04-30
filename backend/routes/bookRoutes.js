import express from "express";
import { getAllBooks, saveNewBook, updateBook, deleteBook, getOneBook } from "../controllers/bookController.js";
const router = express.Router();

//* route to save a new book
router.post("/", saveNewBook);
//* route to get all books
router.get("/", getAllBooks);

//* route to get 1 book
router.get("/:id", getOneBook);

//* Route to update a book
router.put("/:id", updateBook);

//* Route to delete a book
router.delete("/:id", deleteBook);

export default router;
