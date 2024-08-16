import { renderAreas } from "./ParkAreas.js";
import { renderGuests } from "./Guests.js";
import { renderServicesList } from "./Services.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
    <header class="mb-0">
        <div class="image-container d-flex justify-content-center my-3">
            <img class="" src="./img/cider-falls.png" alt="" />
        </div>
        <h1 class="d-flex justify-content-center h-100 py-2" style="margin:0">Cider Falls Park</h1>
    </header>
    <main class="mt-0">
        <div class="areas-container row d-flex justify-content-center mb-5 mx-auto h-100">
            <section id="areas" class="areas col-8 pt-2">
                <div id="services" class="row d-flex justify-content-center text-center my-2">
                     ${renderServicesList()}<!-- Render all services here -->
                </div>
                ${renderAreas()} <!-- Render all park areas here -->
            </section>
            <section class="col-4">
                <div class="guest">
                <h2 class="text-center mt-5">Park Patrons</h2>
                <ul class="mx-auto w-75 text-left">
                    ${renderGuests()} <!-- Render all guests here -->
                </ul>
                </div>
            </section>
        </div>
    </main>
    <footer class="d-flex justify-content-between mx-auto w-100 px-5">
        <div class="mt-4"><p>999-999-9999</p></div>
        <div class="mt-4"><p>someguy@email.com</p></div>
        <div class="mt-4"><p>1234 Cherry Street Someplace, WY 89457</p></div>
    </footer>
`;

mainContainer.innerHTML = applicationHTML;