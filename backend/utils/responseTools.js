import { HTTP } from "../constants/httpStatus";

export const findByIdOrFail = async (Model, id, resourceName = "Resource") => {
  const doc = await Model.findById(id);
  if (!doc) {
    const error = new Error(`${resourceName} not found!`);
    error.statusCode = HTTP.NOT_FOUND;
    throw error;
  }
  return doc;
};
export const findByIdToFail = async (Model, id, resourceName = "Resource") => {
  const doc = await Model.findById(id);
  if (doc) {
    const error = new Error(`${resourceName} already exists !`);
    error.statusCode = HTTP.BAD_REQUEST;
    throw error;
  }
  return doc;
};

export const sendResource = (
  response,
  resource = null,
  statusCode = HTTP.OK,
  message = "Request successful",
  extra = {}
) => {
  const responsePayload = {
    message,
    ...extra,
  };

  if (resource !== null && resource !== undefined) {
    responsePayload.resource = resource;
  }

  response.status(statusCode).json(responsePayload);
};

export const validateRequiredFieldsFromModel = (Model, body) => {
  const requiredFields = [];

  // Loop through the schema paths
  for (const [key, pathType] of Object.entries(Model.schema.paths)) {
    if (
      pathType.isRequired &&
      key !== "__v" && // exclude internal keys
      key !== "_id" && // skip auto-generated _id
      typeof pathType.options.default === "undefined" // skip fields with defaults
    ) {
      requiredFields.push(key);
    }
  }

  const missing = requiredFields.filter(
    (field) => body[field] === undefined || body[field] === ""
  );

  if (missing.length > 0) {
    const error = new Error(`Missing required field(s): ${missing.join(", ")}`);
    error.statusCode = HTTP.BAD_REQUEST;
    throw error;
  }
};
