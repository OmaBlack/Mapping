import Joi, { ValidationResult } from "joi";
export function validateRequest(response: any) {
  const schema = Joi.object({
    originLatitude: Joi.number().min(1).required().label("Origin Latitude"),
    originLongitude: Joi.number().min(1).required().label("Origin Longitude"),
    destinationLatitude: Joi.number()
      .min(1)
      .required()
      .label("Destination Latitude"),
    destinationLongitude: Joi.number()
      .min(1)
      .required()
      .label("Destination Longitude"),
  });
  return schema.validate(response);
}
