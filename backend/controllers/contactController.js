

//* This is a concept i want to try out later, 
//* it must make basic crud operations really easy

import Message from "../models/contactModel.js";
import { createCrudController } from "../utils/controllerFactory.js";

const {
  getAll: getAllMessages,
  getOne: getOneMessage,
  create: saveNewMessage,
  update: updateMessage,
  remove: deleteMessage,
} = createCrudController(Message, "Message");

export {
  getAllMessages,
  getOneMessage,
  saveNewMessage,
  updateMessage,
  deleteMessage,
};
