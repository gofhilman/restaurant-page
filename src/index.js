
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
    headerTitle.textContent = "Meater";

    function init () {
        headerDiv.appendChild(headerLogo);
        headerDiv.appendChild(headerTitle);
        header.insertBefore(headerDiv, nav);
    }

    function screenController () {
        let navButton = "home";
        const updateScreen = (navButton) => {

        };
        const handleClick = (event) => {

        }
        nav.addEventListener('click', handleClick);
        updateScreen(navButton);
    }

    return { init }
})(document);

restaurantPage.init();