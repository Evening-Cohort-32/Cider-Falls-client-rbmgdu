import { guests, parkAreas } from "./database.js";

const allGuestAreas = guests;
const allParkAreas = parkAreas;

// Creates list of guests name and what park area they are located at
export const createGuests = () => {
  let guestsHTML = `<ul>`;
  for (const guest of allGuestAreas) {
    guestsHTML += `
        <li>${guest.name} (${findGuestArea(guest)})</li>
        `;
  }
  guestsHTML += `</ul>`;
  return guestsHTML;
};

//Finds the guests current park Area
const findGuestArea = (guest) => {
  for (const area of allParkAreas) {
    if (guest.area_id === area.id) {
      return area.name;
    }
  }
};
