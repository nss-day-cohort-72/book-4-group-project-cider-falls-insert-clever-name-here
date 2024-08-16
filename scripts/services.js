import { getServices, getServicesToArea } from "./database.js"

export const renderServices = (area) => {
    const servicesToArea = getServicesToArea();
    const services = getServices();
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