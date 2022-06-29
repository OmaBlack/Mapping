import express from "express";
import Joi, { ValidationResult } from "joi";

const schema: any = Joi.object({
  latitude: Joi.string().required(),
  longitude: Joi.string().required(),
});
export default schema;
