import { leftContent, rightContent, contentNav } from "./home.js";
import { breakfastContainer, lunchContainer, dinnerContainer } from "./menu.js";
import { contactInfo, openingHours } from "./contacts.js";
import "./fonts/stylesheet.css";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./styles.css";
import restaurantLogo from "./meater-logo.png";

const restaurantPage = (function (doc) {
    const header = doc.querySelector("header");
    const nav = doc.querySelector("nav");
    const home = doc.querySelector("#home");
    const menu = doc.querySelector("#menu");
    const contacts = doc.querySelector("#contacts");
    const navChoices = [home, menu, contacts];
    const content = doc.querySelector("#content");

    const headerDiv = doc.createElement("div");
    const headerLogo = doc.createElement("img");
    const headerTitle = doc.createElement("p");
    
    Object.assign(headerLogo, {
        src: restaurantLogo,
        alt: "The restaurant logo"
    });
    headerTitle.classList.add('restaurant-name');
    nav.classList.add('marker');
    headerTitle.textContent = "Meater";

    function init () {
        headerDiv.append(headerLogo, headerTitle);
        header.insertBefore(headerDiv, nav);
    }

    function reset () {
        navChoices.forEach(choice => {
            choice.classList.remove(...choice.classList);
        });
        content.classList.remove(...content.classList);
    }

    function screenController () {
        let navButton = "home";
        const updateScreen = (navButton) => {
            switch (navButton) {
                case "home":
                    reset();
                    home.classList.add("current-page");
                    content.classList.add("home-content");
                    content.replaceChildren(leftContent, rightContent);
                    break;
                case "menu":
                    reset();
                    menu.classList.add("current-page");
                    content.classList.add("menu-content");
                    content.replaceChildren(breakfastContainer, lunchContainer, dinnerContainer);
                    break;
                case "contacts":
                    reset();
                    contacts.classList.add("current-page");
                    content.classList.add("contact-content");
                    content.replaceChildren(contactInfo, openingHours);
            }
        };
        const handleHeaderClick = (event) => {
            navButton = event.target.id;
            updateScreen(navButton);
        }
        const handleContentClick = (event) => {
            switch (event.target.id) {
                case "content-menu":
                    navButton = "menu";
                    break;
                case "reserve":
                    navButton = "contacts";
            }
            updateScreen(navButton);
        }
        nav.addEventListener('click', handleHeaderClick);
        contentNav.addEventListener('click', handleContentClick);
        updateScreen(navButton);
    }

    return { init, screenController }
})(document);

restaurantPage.init();
restaurantPage.screenController();