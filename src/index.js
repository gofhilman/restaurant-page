import { leftContent, rightContent, contentNav } from "./home.js";
import "./fonts/stylesheet.css";
import "../node_modules/modern-normalize/modern-normalize.css";
import "./styles.css";
import restaurantLogo from "./meater-logo.png";

const restaurantPage = (function (doc) {
    const header = doc.querySelector("header");
    const nav = doc.querySelector("nav");
    const content = doc.querySelector("#content");

    const headerDiv = doc.createElement("div");
    const headerLogo = doc.createElement("img");
    const headerTitle = doc.createElement("p");
    
    Object.assign(headerLogo, {
        src: restaurantLogo,
        alt: "The restaurant logo",
        width: 150
    });
    headerTitle.classList.add('restaurant-name');
    nav.classList.add('marker');
    headerTitle.textContent = "Meater";

    function init () {
        headerDiv.append(headerLogo, headerTitle);
        header.insertBefore(headerDiv, nav);
    }

    function screenController () {
        let navButton = "home";
        const updateScreen = (navButton) => {
            switch (navButton) {
                case "home":
                    content.replaceChildren(leftContent, rightContent);
                    break;
                case "menu":
                    content.replaceChildren();
                    break;
                case "contacts":
                    content.replaceChildren();
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