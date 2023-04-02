/** @format */

import * as productSchemas from "./schemas/products";
import * as userSchemas from "./schemas/user";
import * as rateSchemas from "./schemas/rate";

export const schemasGql = {
  ...userSchemas,
  ...productSchemas,
  ...rateSchemas,
};
