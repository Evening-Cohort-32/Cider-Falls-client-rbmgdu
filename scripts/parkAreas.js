import {parkAreas} from "./database.js"
import {getServices} from "./services.js"

const allAreas = parkAreas

let parkAreaHTML = ``

export const createParkAreas = () => {
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
    }
    return parkAreaHTML
}