

//* This is a concept i want to try out later, 
//* it must make basic crud operations really easy

import Order from "../models/orderModel.js";
import { createCrudController } from "../utils/controllerFactory.js";

const {
  getAll: getAllOrders,
  getOne: getOneOrder,
  create: saveNewOrder,
  update: updateOrder,
  remove: deleteOrder,
} = createCrudController(Order, "Order");

export {
  getAllOrders,
  getOneOrder,
  saveNewOrder,
  updateOrder,
  deleteOrder,
};
