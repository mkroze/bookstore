import  User  from "../models/userModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { HTTP } from "../constants/httpStatus.js";
import { createCrudController } from "../utils/controllerFactory.js";

// export const saveNewuser = asyncHandler(async (request, response) => {
//   if (!request.body.name || !request.body.email || !request.body.age) {
//     response.status(HTTP.BAD_REQUEST);
//     throw new Erro("Missing fields in the request");
//   }
//   const { name, email, age } = request.body;
//   const newUser = { name, email, age };
//   // check if the user already exists
//   const existingUser = await User.findOne({ name, email, age });
//   if (existingUser) {
//     response.status(HTTP.BAD_REQUEST);
//     throw new Error("User already exists");
//   }
//   const user = await User.create(newUser);
//   return response.status(HTTP.CREATED).send(user);
// });

// export const getAllusers = asyncHandler(async (request, response) => {
//   const users = await User.find({});
//   response.status(HTTP.OK).json({ count: users.length, data: users });
// });

// export const getOneUser = asyncHandler(async (request, response) => {
//   const { id } = request.params;

//   const user = await User.findById(id);

//   if (!user) {
//     response.status(HTTP.NOT_FOUND);
//     throw new Error("User not found");
//   }
//   return response.status(HTTP.OK).json(user);
// });

// export const updateUser = asyncHandler(async (request, response) => {
//   const { id } = request.params;

  

//   const user = await User.findByIdAndUpdate(id, request.body);
//   if (!user) {
//     response.status(HTTP.NOT_FOUND);
//     throw new Error("User not found");
//   }
//   return response.status(HTTP.OK).json({ message:"User updated",data: user });
// });

// export const deleteUser = asyncHandler(async (request, response) => {
//   const { id } = request.params;

//   const user = await User.findByIdAndDelete(id);
//   return response.status(HTTP.OK).json({ message: "User deleted successfully !" });
// });



//? Usual CRUD request dynamic handler
//! lacks customization
const {
  getAll: getAllUsers,
  getOne: getOneUser,
  create: saveNewUser,
  update: updateUser,
  remove: deleteUser,
} = createCrudController(User, "User");

export {
  getAllUsers,
  getOneUser,
  saveNewUser,
  updateUser,
  deleteUser,
};
