import { getAreas, getGuests } from "./database.js";
import { renderServices} from "./Services.js"

document.addEventListener(
  "click",
  (clickEvent) => {
      const itemClicked = clickEvent.target

          if (itemClicked.dataset.type === "area") {
          const areaId = itemClicked.dataset.id

          let guestCounter = 0

          const guests = getGuests()
          for (const guest of guests) {
              if (parseInt(areaId) === guest.areaId) [
                  guestCounter++
              ]
          }
          window.alert(`There are ${guestCounter} guests in this area`)
      }
  }
)


export const renderAreas = () => {
  const areas = getAreas();
  let html = "";
  //tracks the number of areas in the current row
  let areaCount = 0;

  for (const area of areas) {
    if (areaCount === 0) {
      //starts a new row if the area count is 0
      html += `<div class="row d-flex justify-content-around mb-2">`;
    }

    //add the area to the current row
    html += `
            <div class="destination col-3"> 
                <h5 data-type="area"
                    data-id="${area.id}"
                class="text-center">${area.name}</h5>
                <div class="services">
                    <h6 class="">Services</h6> 
                    <ul class="mx-3">${renderServices(area)}</ul> 
                </div> 
            </div>
        `;
    areaCount++;

    //check to see if the number of areas = 3
    if (areaCount === 3) {
      //after three areas close the row
      html += `</div>`;
      //reset the counter for row
      areaCount = 0;
    }
  }
  //if there are any areas left that didn't fill the last row then close the row
  if (areaCount > 0) {
    html += `</div>`;
  }
  return html;
};

