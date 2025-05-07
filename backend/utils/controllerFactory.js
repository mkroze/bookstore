import { asyncHandler } from "./asyncHandler.js";
import {
  validateRequiredFieldsFromModel,
  sendResource,
  findByIdOrFail,
} from "./responseTools.js";
import { HTTP } from "../constants/httpStatus.js";

export const createCrudController = (Model, resourceName) => ({
  getAll: asyncHandler(async (req, res) => {
    const items = await Model.find({});
    sendResource(
      res,
      items,
      HTTP.OK,
      `${resourceName}s retrieved successfully`,
      {
        count: items.length,
      }
    );
  }),

  getOne: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const item = await findByIdOrFail(Model, id, resourceName);
    sendResource(res, item, HTTP.OK, `${resourceName} retrieved successfully`);
  }),

  create: asyncHandler(async (req, res) => {
    validateRequiredFieldsFromModel(Model, req.body);
    const newItem = await Model.create(req.body);
    sendResource(
      res,
      newItem,
      HTTP.CREATED,
      `${resourceName} created successfully`
    );
  }),

  update: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const item = await findByIdOrFail(Model, id, resourceName);
    validateRequiredFieldsFromModel(Model, req.body);
    const updated = await Model.findByIdAndUpdate(id, req.body, { new: true });
    sendResource(res, updated, HTTP.OK, `${resourceName} updated successfully`);
  }),

  remove: asyncHandler(async (req, res) => {
    const { id } = req.params;
    const item = await findByIdOrFail(Model, id, resourceName);
    await Model.findByIdAndDelete(id);
    sendResource(res, item, HTTP.OK, `${resourceName} deleted successfully`);
  }),
});
