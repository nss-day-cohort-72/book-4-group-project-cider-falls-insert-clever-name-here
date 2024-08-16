import { getAreas } from "./database.js"
import { renderServices } from "./services.js";


export const renderAreas = () => {
    const areas = getAreas();
    // const servicesToArea = getServicesToArea();
    let html = '';
    for (const area of areas) {
        html += `<div class="destination col-3"> 
                    <h3 class="text-center">${area.name}</h3>
                    <div class="services">
                         <h5 class="">Services</h5> 
                         <ul class="mx-3">${renderServices(area)}  </ul> 
                    </div> 
                </div>`
    }
    return html;
}