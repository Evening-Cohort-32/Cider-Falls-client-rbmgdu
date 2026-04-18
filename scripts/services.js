import { services, areaServices } from "./database.js";

const allServices = services;
const allAreaServices = areaServices;

//Area is accepted as a parameter and each of its area services are found
export const getServices = (area) => {
  let matchedService = []
  let serviceHTML =`<ul class = "services">`
  for (const areaService of allAreaServices) {
    if(area.id === areaService.parkAreaId){
      //Area services are then ran through a function that finds the names of the services
      matchedService.push(findServiceNames(areaService));
    }
  }
  //HTML for the services is then recreated and returned
  for (const service of matchedService){
    serviceHTML +=`
    <li>${service}</li>
    `
  }
  serviceHTML += `</ul>`
  return serviceHTML
};


//Function for finding the service name.
const findServiceNames = (match) => {
  for (const service of allServices){
    if (match.serviceId === service.id)
      return service.name
  }
}