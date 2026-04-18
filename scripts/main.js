import { createParkAreas, initParkAreaClicks } from './parkAreas.js';
import { createGuests } from './guests.js';
import { initServiceClicks, renderAllServices } from './services.js';

const mainContainer = document.querySelector('#container');
if (!mainContainer) throw new Error('Missing #container in index.html');

const mainHTML = `
  <header>
    <img id="logo" src="https://www.nps.gov/theme/assets/dist/images/branding/logo.png" alt="logo">
    <h1>Cider Falls Park</h1>
  </header>
  <article class="details">
    <section class="services-global">
      ${renderAllServices()}
      <div id="service-results" class="service-results"></div>
    </section>
    <section class="parks">
      ${createParkAreas()}
    </section>
    <section class="guests">
      <h2>Guests</h2>
      ${createGuests()}
    </section>
  </article>
  <footer>
    <ul>555-555-555</ul>
    <ul>Ciderfallspark.org</ul>
    <ul>123 Forrest Road, Chatt Falls, TN</ul>
  </footer>
`;

mainContainer.innerHTML = mainHTML;

// initialize delegated click handlers (after DOM insertion)
initServiceClicks('#container');
initParkAreaClicks('#container');


