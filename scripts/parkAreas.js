import {getParkAreas} from "./database.js"
import {serviceAreas} from "./services.js"

const allAreas = getParkAreas()

let parkAreaHTML = ``

export const parkAreas = () => {
    for(const area of allAreas){
        parkAreaHTML += `
        <section id = "parkAreaDetails" 
        data.type = "parkArea"
        data.area_id = "${area.area_id}"
        data.area_name = "${area.area_name}"
        data.location = "${area.location}"
        >
            <h2>${area.area_name}</h2>
            ${services(area)}
        </section>
        `
    }
}