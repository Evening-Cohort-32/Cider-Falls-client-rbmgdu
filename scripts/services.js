import { services, areaServices, parkAreas, guests } from './database.js';

const allServices = services;
const allAreaServices = areaServices;
const allParkAreas = parkAreas;

// Returns HTML for an unordered list of services for a given area
export const getServices = (area) => {
  const matched = [];
  let html = `<ul class="services">`;
  for (const as of allAreaServices) {
    if (as.parkAreaId === area.id) matched.push({ id: as.serviceId, name: findServiceName(as) });
  }
  for (const s of matched) html += `<li data-service-id="${s.id}">${s.name}</li>`;
  html += `</ul>`;
  return html;
};

const findServiceName = (match) => {
  for (const s of allServices) if (s.id === match.serviceId) return s.name;
  return '';
};

export const initServiceClicks = (containerSelector = '#container') => {
  const container = document.querySelector(containerSelector);
  if (!container) return;
  container.addEventListener('click', (evt) => {
    const li = evt.target.closest('li[data-service-id]');
    if (!li || !container.contains(li)) return;
    const serviceId = Number(li.dataset.serviceId);
    if (!serviceId) return;

    const matchingAreaIds = allAreaServices.filter((as) => as.serviceId === serviceId).map((as) => as.parkAreaId);
    const matchingAreas = allParkAreas.filter((a) => matchingAreaIds.includes(a.id));

    // render results into the #service-results panel if present
    const resultsEl = document.querySelector('#service-results');
    const serviceName = li.textContent;
    if (!resultsEl) {
      // fallback to alert if panel missing
      const areaNames = matchingAreas.map((a) => a.name).join(', ');
      alert(areaNames.length ? `${serviceName} is available at: ${areaNames}` : `No park areas provide ${serviceName}`);
      return;
    }

    if (matchingAreas.length === 0) {
      resultsEl.innerHTML = `<div class="service-none">No park areas provide <strong>${serviceName}</strong>.</div>`;
      return;
    }

    let html = `<h3>Where to ${serviceName}</h3><ul class="service-results-list">`;
    for (const area of matchingAreas) {
      const guestsInArea = guests.filter((g) => g.area_id === area.id);
      const headCount = guestsInArea.length;
      html += `<li class="service-area">`;
      html += `<strong>${area.name}</strong> — ${headCount} guest${headCount === 1 ? '' : 's'}`;
      if (headCount > 0) {
        html += `<ul class="guest-names">`;
        for (const g of guestsInArea) html += `<li>${g.name}</li>`;
        html += `</ul>`;
      }
      html += `</li>`;
    }
    html += `</ul>`;
    resultsEl.innerHTML = html;
  });
};

export const renderAllServices = () => {
  let html = `<ul id="service-list" class="service-list">`;
  for (const svc of allServices) html += `<li data-service-id="${svc.id}">${svc.name}</li>`;
  html += `</ul>`;
  return html;
};
