import { getServices, getAreaServices } from "./database.js";

const allServices = getServices();
const AreaServices = getAreaServices();

//
export const serviceAreas = (area) => {
  let matchedService = [];
};
