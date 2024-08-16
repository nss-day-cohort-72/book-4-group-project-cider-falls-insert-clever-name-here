import { getServices, getServicesToArea } from "./database.js"

const services = getServices();
const servicesToArea = getServicesToArea();

export const renderServices = (area) => {
    
    let html = ''
    for (const obj of servicesToArea) {
        if( area.id === obj.areaId){
            for (const service of services) {
                if(service.id === obj.servicesId){
                    html += `<li>${service.name}</li>`

                }
            }
        }
    }
    return html;

}

export const renderServicesList = () => {
    let html = '';

    // Loop through all services to generate the HTML
    for (const service of services) {
        html += `<div class="col">${service.name}</div>`;
    }
    return html;
}