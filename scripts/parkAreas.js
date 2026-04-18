import { parkAreas, guests } from "./database.js";
import { getServices } from "./services.js";

const allAreas = parkAreas;

export const createParkAreas = () => {
<<<<<<< HEAD
  let parkAreaHTML = "";
  for (const area of allAreas) {
    parkAreaHTML += `
      <section class="park-area" data-area-id="${area.id}">
        <h3>${area.location}</h3>
        <h2>${area.name}</h2>
        ${getServices(area)}
        <div class="guest-info" data-area-id="${area.id}"></div>
      </section>
    `;
  }
  return parkAreaHTML;
};

// Clicking on a park-area section will toggle a small guest list for that area.
export const initParkAreaClicks = (containerSelector = '#container') => {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  container.addEventListener('click', (evt) => {
    const areaEl = evt.target.closest('section.park-area');
    if (!areaEl || !container.contains(areaEl)) return;

    const areaId = Number(areaEl.dataset.areaId);
    if (!areaId) return;

    const guestInfo = areaEl.querySelector('.guest-info');
    if (!guestInfo) return;

    // If already populated, toggle visibility
    if (guestInfo.innerHTML.trim()) {
      // toggle: if visible, hide; otherwise show
      guestInfo.innerHTML = '';
      return;
=======
    for(const area of allAreas){
        parkAreaHTML += `
        <section id = "parkAreaDetails" 
        data-type = "parkArea"
        data-area_id = "${area.id}"
        data-area_name = "${area.name}"
        data-location = "${area.location}"
        >
            <h3>${area.location}</h3>
            <h2>${area.name}</h2>
            ${getServices(area)}
        </section>
        `
>>>>>>> a301b8deff971ca5156aa8409238d48a4f845d7d
    }

    // find current guests in this area (guests may have area_id set)
    const currentGuests = guests.filter((g) => g.area_id === areaId);

    if (currentGuests.length === 0) {
      guestInfo.innerHTML = `<small>No guests currently in this area</small>`;
      return;
    }

    let html = `<ul class="guest-list">`;
    for (const guest of currentGuests) {
      html += `<li>${guest.name}</li>`;
    }
    html += `</ul>`;
    guestInfo.innerHTML = html;
  });
};
