import { getGuests } from "./database.js";

const guests = getGuests()

export const renderGuests = () => {
    let html = "<ul>"

    for (const guest of guests) {
        html += `<li data-type="guest"
                     data-id="${guest.id}">
                    ${guest.name}
                </li>`
    }

    html += "</ul>"
}