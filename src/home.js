const leftContent = document.createElement('div');
const contentHeader = document.createElement('h2');
const contentSubheader = document.createElement('h2');
const rightContent = document.createElement('div');
const restaurantName = document.createElement('p');
const contentNav = document.createElement('div');
const contentMenu = document.createElement('button');
const reserve = document.createElement('button');

contentHeader.textContent = "Fuel your gains";
contentSubheader.textContent = "Eat clean. Build strong.";
restaurantName.textContent = "Meater";
contentMenu.textContent = "Menu";
reserve.textContent = "Reserve";

restaurantName.classList.add('restaurant-name');
contentNav.classList.add('marker');
contentNav.setAttribute('id', 'content-nav');
contentMenu.setAttribute('id', 'content-menu');
reserve.setAttribute('id', 'reserve');

contentNav.append(contentMenu, reserve);
leftContent.append(contentHeader, contentSubheader);
rightContent.append(restaurantName, contentNav);

export { leftContent, rightContent, contentNav };