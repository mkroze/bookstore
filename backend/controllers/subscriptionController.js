import { createCrudController } from "../utils/controllerFactory.js";
import Subscription from "../models/subscriptionModel";
import { asyncHandler } from "../utils/asyncHandler";
import { HTTP } from "../constants/httpStatus.js";

// export const getAllSubscriptions = asyncHandler(async (request, response) => {
//   const subscriptions = await Subscription.find({});
//   return response.status(HTTP.OK).json({
//     message: "data retrieved successfully",
//     count: subscriptions.length,
//     data: subscriptions,
//   });
// });
// export const getOneSubscription = asyncHandler(async (request, response) => {
//   const { id } = request.params;
//   const subscription = await Subscription.findById(id);
//   if (!subscription) {
//     response.status(HTTP.NOT_FOUND);
//     throw new Error("Subscription not found !");
//   }

//   return response.status(HTTP.OK).json({
//     message: "subscription retrieved succcessfully !",
//     data: subscription,
//   });
// });
// export const saveNewSubscription = asyncHandler(async (request, response) => {
//   if (
//     !request.body.user ||
//     !request.body.stripeCustomerId ||
//     !request.body.stripeSubscriptionId ||
//     !request.body.plan ||
//     !request.body.status ||
//     !request.body.currentPeriodStart ||
//     !request.body.currentPeriodEnd ||
//     !request.body.cancelAtPeriodEnd
//   ) {
//     response.status(HTTP.BAD_REQUEST);
//     throw new Error("Missing fields, saving failed !");
//   }
//   const {
//     user,
//     stripeCustomerId,
//     stripeSubscriptionId,
//     plan,
//     status,
//     currentPeriodStart,
//     currentPeriodEnd,
//     cancelAtPeriodEnd,
//   } = request.body;
  
//   const existingSubscription = await Subscription.findOne({
//     user,
//     stripeCustomerId,
//     stripeSubscriptionId,
//     plan,
//     status,
//     currentPeriodStart,
//     currentPeriodEnd,
//     cancelAtPeriodEnd,
//   });

//   if (existingSubscription) {
//     response.status(HTTP.BAD_REQUEST);
//     throw new Error("Subscription already exists, saving failed");
//   }
// const newSubscription = {
//     user,
//     stripeCustomerId,
//     stripeSubscriptionId,
//     plan,
//     status,
//     currentPeriodStart,
//     currentPeriodEnd,
//     cancelAtPeriodEnd,
//   };
//   const subscription = await Subscription.create(newSubscription);
//   return response
//     .status(HTTP.OK)
//     .json({ message: "Subscription saved successfully", data: subscription });
// });
// export const updateSubscription = asyncHandler(async (request, response) => {
//   const { id } = request.params;
//   //! checks if the user exists
//   const existingSubscription = await Subscription.findById(id);
//   if (!existingSubscription) {
//     response.status(HTTP.NOT_FOUND);
//     throw new Error("Subscription couldn't be found, update failed.");
//   }
//   //! checks if the request is filled correctly
//   if (
//     !request.body.user ||
//     !request.body.stripeCustomerId ||
//     !request.body.stripeSubscriptionId ||
//     !request.body.plan ||
//     !request.body.status ||
//     !request.body.currentPeriodStart ||
//     !request.body.currentPeriodEnd ||
//     !request.body.cancelAtPeriodEnd
//   ) {
//     response.status(HTTP.BAD_REQUEST);
//     throw new Error("Missing fields, updating failed !");
//   }
//   //? updates the user
//   const subscription = await Subscription.findByIdAndUpdate(id, request.body);
//   return response
//     .status(HTTP.OK)
//     .json({ message: "Subscription updated successfully", data: subscription });
// });

// export const deleteSubscription = asyncHandler(async (request, response) => {
//   const { id } = request.params;
//   const existingSubscription = await Subscription.findById(id);
//   if (!existingSubscription) {
//     response.status(HTTP.NOT_FOUND);
//     throw new Error("Subscription couldn't be found, deleting failed.");
//   }
//   //? updates the user
//   const subscription = await Subscription.findByIdAndDelete(id);
//   return response
//     .status(HTTP.OK)
//     .json({ message: "Subscription updated successfully", data: subscription });
// });




//? Usual CRUD request dynamic handler
//! lacks customization
const {
  getAll: getAllSubscriptions,
  getOne: getOneSubscription,
  create: saveNewSubscription,
  update: updateSubscription,
  remove: deleteSubscription,
} = createCrudController(Subscription, "Subscription");

export {
  getAllSubscriptions,
  getOneSubscription,
  saveNewSubscription,
  updateSubscription,
  deleteSubscription,
};
