import { services } from "./database.js"

export const createServiceList = () => {
    let servicesHTML = `<h2>Our Services</h2><ul>`

    for (const service of services) {
         servicesHTML  += `
        <li data-id="${service.id}" data-type="service">
                ${service.name}
            </li>`
    }
    servicesHTML += `</ul>`
    return servicesHTML
}
