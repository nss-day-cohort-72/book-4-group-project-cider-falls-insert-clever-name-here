import { getServices, getServicesToArea, getAreas } from "./database.js";

const services = getServices();
const servicesToArea = getServicesToArea();
const areas = getAreas();

document.addEventListener("click", (clickEvent) => {
    const targetClicked = clickEvent.target;

    if (targetClicked.dataset.type === "service") {
        const serviceName = targetClicked.textContent;
        let serviceId = null;

        // Find the ID of the clicked service
        for (const service of services) {
            if (service.name === serviceName) {
                serviceId = service.id;
                break;
            }
        }

        if (serviceId !== null) {
            const areaIds = [];
            const areaNames = [];

            for (const serviceToArea of servicesToArea) {
                if (serviceToArea.servicesId === serviceId) {
                    areaIds[areaIds.length] = serviceToArea.areaId;
                }
            }

            for (const area of areas) {
                for (const id of areaIds) {
                    if (area.id === id) {
                        areaNames[areaNames.length] = area.name;
                        break;
                    }
                }
            }

            let message = serviceName + " is available in ";
            for (let i = 0; i < areaNames.length; i++) {
                if (i > 0) {
                    message += ", ";
                }
                message += areaNames[i];
            }
            window.alert(message); 
        }
    }
});

export const renderServices = (area) => {
    let html = '';
    for (const serviceToArea of servicesToArea) {
        if (area.id === serviceToArea.areaId) {
            for (const service of services) {
                if (service.id === serviceToArea.servicesId) {
                    html += `<li>${service.name}</li>`;
                }
            }
        }
    }
    return html;
};

export const renderServicesList = () => {
    let html = '';

    // Loop through all services to generate the HTML
    for (const service of services) {
        html += `<div data-type="service" class="col">${service.name}</div>`;
    }
    return html;
};