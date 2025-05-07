import express from "express";
import {
  getOneProduct,
  getAllproducts,
  addProduct,
  deleteProduct,
} from "../controllers/productcontroller";
const router = express.Router();

router.get("/products", getAllproducts);
router.get("/products/:id", getOneProduct);
router.post("/products", addProduct);
router.put("/products/:id", editProduct);
router.delete("/products/:id", deleteProduct);

export default router;
