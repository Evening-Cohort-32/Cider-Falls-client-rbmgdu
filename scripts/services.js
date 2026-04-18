import { services, areaServices, parkAreas } from "./database.js";

const allServices = services;
const allAreaServices = areaServices;
const allParkAreas = parkAreas;

//Area is accepted as a parameter and each of its area services are found
// Returns HTML for an unordered list of services for that area. Each
// <li> includes a data-service-id used by the click handler.
export const getServices = (area) => {
  const matchedService = [];
  let serviceHTML = `<ul class="services">`;

  for (const areaService of allAreaServices) {
    if (area.id === areaService.parkAreaId) {
      matchedService.push({ id: areaService.serviceId, name: findServiceNames(areaService) });
    }
  }

  for (const service of matchedService) {
    serviceHTML += `\n    <li data-service-id="${service.id}">${service.name}</li>\n    `;
  }

  serviceHTML += `</ul>`;
  return serviceHTML;
};


//Function for finding the service name.
const findServiceNames = (match) => {
  for (const service of allServices) {
    if (match.serviceId === service.id) return service.name;
  }
};

// When a service is clicked we will show which park areas provide it.
export const initServiceClicks = (containerSelector = '#container') => {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.addEventListener('click', (evt) => {
    const li = evt.target.closest('.services li');
    if (!li || !container.contains(li)) return;

    const serviceId = Number(li.dataset.serviceId);
    if (!serviceId) return;

    // find park areas that have this service
    const matchingAreaIds = allAreaServices
      .filter((as) => as.serviceId === serviceId)
      .map((as) => as.parkAreaId);

    const matchingAreas = allParkAreas.filter((area) => matchingAreaIds.includes(area.id));

    const areaNames = matchingAreas.map((a) => a.name).join(', ');

    // simple UI: alert the areas (can be replaced with nicer UI later)
    if (areaNames.length) {
      alert(`${li.textContent} is available at: ${areaNames}`);
    } else {
      alert(`No park areas provide ${li.textContent}`);
    }
  });
};