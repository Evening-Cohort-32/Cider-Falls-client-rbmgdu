// In-memory "database" seeded from project docs
// Resources described in the docs:
// - parkAreas: has its own info (id, name, location)
// - services: list of services the park provides (id, name)
// - guests: park visitors (id, name, optional area_id)
// - areaServices: join table linking parkAreas <> services
// - guestAreas: join table tracking which guests are in which areas
//
// The join records include a `current` flag so a guest can have a
// history of visits while still allowing a single current location to be
// Clean single-definition module
// (previous file had merge conflicts/duplicates; resolved)

// parkAreas: has its own info (id, name, location)
// services: list of services the park provides (id, name)
// guests: park visitors (id, name, optional area_id)
// areaServices: join table linking parkAreas <> services
// guestAreas: join table tracking which guests are in which areas

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
  { id: 3, name: 'Carol', area_id: 3 },
];

export const areaServices = [
  { id: 1, parkAreaId: 1, serviceId: 1 },
  { id: 2, parkAreaId: 1, serviceId: 2 },
  { id: 3, parkAreaId: 2, serviceId: 1 },
  { id: 4, parkAreaId: 3, serviceId: 4 },
  { id: 5, parkAreaId: 2, serviceId: 3 },
];

export const guestAreas = [
  { id: 1, guestId: 1, parkAreaId: 1, current: true },
  { id: 2, guestId: 2, parkAreaId: 2, current: true },
  { id: 3, guestId: 3, parkAreaId: 3, current: true },
  { id: 4, guestId: 1, parkAreaId: 3, current: false },
];
