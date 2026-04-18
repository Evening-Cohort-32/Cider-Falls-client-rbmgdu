

export const parkAreas = [
  { id: 1, name: 'Rivers & Trails', location: 'North Loop' },
  { id: 2, name: 'Upper Falls', location: 'East Ridge' },
  { id: 3, name: 'Picnic Grove', location: 'South Meadow' },
];

export const services = [
  { id: 1, name: 'Hiking' },
  { id: 2, name: 'Fishing' },
  { id: 3, name: 'Boating' },
  { id: 4, name: 'Picnicking' },
];

export const guests = [
  { id: 1, name: 'Alice', area_id: 1 },
  { id: 2, name: 'Bob', area_id: 2 },
  { id: 3, name: 'Carol', area_id:3 },
];

// areaServices allows many services per area and the same service across areas
export const areaServices = [
  { id: 1, parkAreaId: 1, serviceId: 1 }, // Rivers & Trails -> Hiking
  { id: 2, parkAreaId: 1, serviceId: 2 }, // Rivers & Trails -> Fishing
  { id: 3, parkAreaId: 2, serviceId: 1 }, // Upper Falls -> Hiking
  { id: 4, parkAreaId: 3, serviceId: 4 }, // Picnic Grove -> Picnicking
  { id: 5, parkAreaId: 2, serviceId: 3 }, // Upper Falls -> Boating
];

// guestAreas tracks guest membership of areas. `current: true` marks the
// guest's current location (used to display current park area next to name).
export const guestAreas = [
  { id: 1, guestId: 1, parkAreaId: 1, current: true },
  { id: 2, guestId: 2, parkAreaId: 2, current: true },
  { id: 3, guestId: 3, parkAreaId: 3, current: true },
  // example of a previous visit record (history) - Alice visited Picnic Grove
  { id: 4, guestId: 1, parkAreaId: 3, current: false },
];