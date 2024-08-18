import { getServices, getServicesToArea, getAreas } from "./database.js";

const services = getServices();
const servicesToArea = getServicesToArea();
const areas = getAreas();

document.addEventListener("click", (clickEvent) => {
    const targetClicked = clickEvent.target;

    if (targetClicked.dataset.type === "service") {
        const serviceName = targetClicked.textContent;
        let serviceId;

        // Find the ID of the clicked service
        for (const service of services) {
            if (service.name === serviceName) {
                serviceId = service.id;
            }
        }

        if (serviceId) {
            let areaIds = [];

            // Find all area IDs where the service is available
            for (const serviceToArea of servicesToArea) {
                if (serviceToArea.servicesId === serviceId) {
                    areaIds.push(serviceToArea.areaId);
                }
            }

            let areaNames = [];

            // Find names of the areas corresponding to the IDs
            for (const area of areas) {
                if (areaIds.includes(area.id)) {
                    areaNames.push(area.name);
                }
            }

            // Display message
            window.alert(`${serviceName} is available in ${areaNames.join(", ")}`);
        }
    }
});

export const renderServices = (area) => {
    let html = '';
    for (const obj of servicesToArea) {
        if (area.id === obj.areaId) {
            for (const service of services) {
                if (service.id === obj.servicesId) {
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