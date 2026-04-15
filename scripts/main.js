import { parkAreas } from './parkAreas.js'
import { guestArea } from './guests.js'
import { serviceAreas } from './services.js'

document.addEventListener('DOMContentLoaded' , () => {
    parkAreas()
    guestArea()
    serviceAreas()
})
const mainContainer = document.querySelector("#container");

//The main HTML for the site is created
const mainHTML = `
    <header>
        <img id = logo src = https://www.nps.gov/theme/assets/dist/images/branding/logo.png>
        <h1>Cider Falls Park</h1>
    </header>
        <article class = details>
            <section class = parks>
                ${parkAreas()}
            </section>
            <section class = guests>
                <H2>Guests</H2>
                ${guestArea()}
            </section>
        </article>
    <footer>
        <ul>555-555-555</ul>
        <ul>Ciderfallspark.org</ul>
        <ul>123 Forrest Road, Chatt Falls, TN</ul>
    </footer>
`