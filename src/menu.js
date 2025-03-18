import breakfastOne from "./breakfast-1.png";
import breakfastTwo from "./breakfast-2.png";
import lunchOne from "./lunch-1.png";
import lunchTwo from "./lunch-2.png";
import dinnerOne from "./dinner-1.png";
import dinnerTwo from "./dinner-2.png";

const containers = [];
const containerTitles = [];
const food = [];

for (let i = 0; i < 3; i++) {
    const container = document.createElement('div');
    container.classList.add('container');
    const containerTitle = document.createElement('p');
    containerTitle.classList.add('container-title', 'marker');
    container.appendChild(containerTitle);
    const containerContent = document.createElement('div');
    containerContent.classList.add('container-content');
    let subFood = [];
    for (let j = 0; j < 2; j++) {
        const menu = document.createElement('div');
        menu.classList.add('menu');
        let subSubFood = [];
        const foodImage = document.createElement('img');
        foodImage.classList.add('food-image');
        const foodName = document.createElement('h1');
        foodName.classList.add('food-name');
        const foodInfo = document.createElement('h2');
        foodInfo.classList.add('food-info');
        menu.append(foodImage, foodName, foodInfo);
        containerContent.appendChild(menu);
        subSubFood.push(foodImage, foodName, foodInfo);
        subFood.push(subSubFood);
    }
    container.appendChild(containerContent);
    containers.push(container);
    containerTitles.push(containerTitle);
    food.push(subFood);
}

const [breakfastContainer, lunchContainer, dinnerContainer] = containers;
const [breakfastTitle, lunchTitle, dinnerTitle] = containerTitles;
const [[[firstBreakfastImage, firstBreakfastTitle, firstBreakfastInfo], 
    [secondBreakfastImage, secondBreakfastTitle, secondBreakfastInfo]],
    [[firstLunchImage, firstLunchTitle, firstLunchInfo], 
    [secondLunchImage, secondLunchTitle, secondLunchInfo]],
    [[firstDinnerImage, firstDinnerTitle, firstDinnerInfo],
    [secondDinnerImage, secondDinnerTitle, secondDinnerInfo]]] = food;

breakfastTitle.textContent = "Breakfast";
lunchTitle.textContent = "Lunch";
dinnerTitle.textContent = "Dinner";

const images = [firstBreakfastImage, secondBreakfastImage, firstLunchImage,
    secondLunchImage, firstDinnerImage, secondDinnerImage];

const imageSrc = [breakfastOne, breakfastTwo, lunchOne,
    lunchTwo, dinnerOne, dinnerTwo];

const imageAlt = ["Baked Egg with Spinach", "Rustic Country Omelette",
    "Pineapple Chicken Burger", "Bulk-Up Tuna Nicoise",
    "Classic Steak and Eggs", "Japanese Beef and Wasabi Mash"];

for (let i = 0; i < images.length; i++) {
    Object.assign(images[i], {
        src: imageSrc[i],
        alt: imageAlt[i],
        width: 400
    });
}

export { breakfastContainer, lunchContainer, dinnerContainer };