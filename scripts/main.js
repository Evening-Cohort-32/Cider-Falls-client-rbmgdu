import { createParkAreas } from './parkAreas.js'
import { createGuests } from './guests.js'

// document.addEventListener('DOMContentLoaded' , () => {
//     parkAreas()
//     guestArea()
//     serviceAreas()
// })

const mainContainer = document.querySelector("#container");

//The main HTML for the site is created
const mainHTML = `
    <header>
        <img id = logo src = https://www.nps.gov/theme/assets/dist/images/branding/logo.png>
        <h1>Cider Falls Park</h1>
    </header>
        <article class = details>
            <section class = parks>
                ${createParkAreas()}
            </section>
            <section class = guests>
                <H2>Guests</H2>
                ${createGuests()}
            </section>
        </article>
    <footer>
        <ul>555-555-555</ul>
        <ul>Ciderfallspark.org</ul>
        <ul>123 Forrest Road, Chatt Falls, TN</ul>
    </footer>
`
mainContainer.innerHTML = mainHTML