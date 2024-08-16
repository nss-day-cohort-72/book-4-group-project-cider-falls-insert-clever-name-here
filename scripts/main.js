import { renderAreas } from "./ParkAreas";
import { renderGuests } from "./Guests.js";
import { renderServices } from "./Services.js";

const mainContainer = document.querySelector("#container");

const applicationHTML = `
    <header>
        <div class="image-container d-flex justify-content-center my-3">
            <img class="" src="./img/cider-falls.png" alt="" />
        </div>
        <h1 class="d-flex justify-content-center my-2">Cider Falls Park</h1>
    </header>
    <main>
        <div class="areas-container row d-flex justify-content-center mb-5 mx-auto h-100">
            <section id="areas" class="areas col-8 pt-2">
                <div id="services" class="row d-flex justify-content-center text-center my-2">
                    ${renderServices()} <!-- Render all services here -->
                </div>
                ${renderAreas()} <!-- Render all park areas here -->
            </section>
            <section class="col-4">
                <h2 class="text-center mt-5">Park Patrons</h2>
                <ul class="mx-auto w-75 text-left">
                    ${renderGuests()} <!-- Render all guests here -->
                </ul>
            </section>
        </div>
    </main>
    <footer class="d-flex justify-content-between mx-5">
        <div><p>999-999-9999</p></div>
        <div><p>someguy@email.com</p></div>
        <div><p>1234 Cherry Street Someplace, WY 89457</p></div>
    </footer>
`;

mainContainer.innerHTML = applicationHTML;