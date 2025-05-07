

//* This is a concept i want to try out later, 
//* it must make basic crud operations really easy

import Product from "../models/productModel.js";
import { createCrudController } from "../utils/controllerFactory.js";


//? Usual CRUD request dynamic handler
//! lacks customization
const {
  getAll: getAllProducts,
  getOne: getOneProduct,
  create: saveNewProduct,
  update: updateProduct,
  remove: deleteProduct,
} = createCrudController(Product, "Product");

export {
  getAllProducts,
  getOneProduct,
  saveNewProduct,
  updateProduct,
  deleteProduct,
};
