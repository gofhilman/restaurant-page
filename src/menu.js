import breakfastOne from "./breakfast-1.png";
import breakfastTwo from "./breakfast-2.png";
import lunchOne from "./lunch-1.png";
import lunchTwo from "./lunch-2.png";
import dinnerOne from "./dinner-1.png";
import dinnerTwo from "./dinner-2.png";

const containers = [];

const menuSections = ["Breakfast", "Lunch", "Dinner"];

const imageSrc = [
    breakfastOne, breakfastTwo, lunchOne,
    lunchTwo, dinnerOne, dinnerTwo
];

const imageAlt = [
    "Baked Egg with Spinach", "Rustic Country Omelette",
    "Pineapple Chicken Burger", "Bulk-Up Tuna Nicoise",
    "Classic Steak and Eggs", "Japanese Beef and Wasabi Mash"
];

const infoGrids = [];
const number = ['206', '9g', '8g', '22g', '288', '11g', '13g', '34g',
    '460', '12g', '45g', '45g', '594', '16g', '25g', '52g',
    '725', '25g', '2g', '87g', '409', '9g', '32g', '30g'];
const sectionText = ['Calories', 'Fat', 'Carbs', 'Protein'];
let numberIter = 0;
let textIter = 0;
for (let i = 0; i < 6; i++) {
    const infoGrid = document.createElement('div');
    for (let j = 0; j < 2; j++) {
        for (let k = 0; k < 2; k++) {
            const infoNumber = document.createElement('h2');
            infoNumber.classList.add('info-number');
            infoNumber.textContent = number[numberIter++];
            infoGrid.appendChild(infoNumber);
        }  
        for (let k = 0; k < 2; k++) {
            const infoText = document.createElement('h2');
            infoText.classList.add('info-text');
            infoText.textContent = sectionText[textIter%4];
            textIter++;
            infoGrid.appendChild(infoText);
        } 
    }
    infoGrids.push(infoGrid);   
}

for (let i = 0; i < 3; i++) {
    const container = document.createElement('div');
    container.classList.add('container');
    const containerTitle = document.createElement('p');
    containerTitle.classList.add('container-title', 'marker');
    containerTitle.textContent = menuSections[i];
    container.appendChild(containerTitle);
    const containerContent = document.createElement('div');
    containerContent.classList.add('container-content');
    
    for (let j = 0; j < 2; j++) {
        const menu = document.createElement('div');
        menu.classList.add('menu');
        const foodImage = document.createElement('img');
        foodImage.classList.add('food-image');
        Object.assign(foodImage, {
            src: imageSrc[2*i+j],
            alt: imageAlt[2*i+j],
        });
        const foodName = document.createElement('h1');
        foodName.classList.add('food-name');
        foodName.textContent = imageAlt[2*i+j];
        const foodInfo = infoGrids[2*i+j];
        foodInfo.classList.add('food-info');
        menu.append(foodImage, foodName, foodInfo);
        containerContent.appendChild(menu);
    }
    container.appendChild(containerContent);
    containers.push(container);
}

const [breakfastContainer, lunchContainer, dinnerContainer] = containers;

export { breakfastContainer, lunchContainer, dinnerContainer };