import { getServices, getAreaServices } from "./database.js";

const allServies = getServices();
const AreaServices = getAreaServices();

//
export const serviceAreas = (area) => {
  let matchedService = [];
};
