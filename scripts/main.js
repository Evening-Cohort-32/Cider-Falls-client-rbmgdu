import { createParkAreas } from './parkAreas.js'
import { createGuests } from './guests.js'
import { createServiceList } from './createServices.js'
import { services, parkAreas, areaServices } from './database.js'


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
        <article class=details>
        <section class=services>
            ${createServiceList()}
            </section>
              <div id="service-message"></div>
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
document.addEventListener("click", (clickEvent) => {
    const itemClicked = clickEvent.target

    if (itemClicked.dataset.type === "service") {
        const serviceId = parseInt(itemClicked.dataset.id)

        const matchingAreaServices = areaServices.filter(
            (as) => as.serviceId === serviceId
        )

        const supportingAreas = []
        for (const match of matchingAreaServices) {
            const foundArea = parkAreas.find(
                (area) => area.id === match.parkAreaId
            )
            supportingAreas.push(foundArea.name)
        }

        const clickedService = services.find((s) => s.id === serviceId)

        document.querySelector("#service-message").innerHTML = `
            <p>${clickedService.name} is supported by: 
            ${supportingAreas.join(", ")}</p>
        `
    }
})