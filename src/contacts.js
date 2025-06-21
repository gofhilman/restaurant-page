import phoneIcon from "./phone.svg";
import placeIcon from "./map-marker.svg";

const iconSrc = [phoneIcon, placeIcon];
const iconAlt = ["Phone icon", "Place icon"];
const contactText = ["+62 345 6789 0123", "60 Sena St, Medan 20986, Indonesia"];
const days = ["Sun", "Mon\u2013Thu","Fri\u2013Sat"];
const hours = ["8am\u20139pm", "9am\u20139pm", "8am\u201311pm"];

const contactInfo = document.createElement('div');
const restaurant = document.createElement('p');
restaurant.classList.add('marker');
restaurant.textContent = "Meater";
const contactDetails = document.createElement('div');
contactDetails.classList.add('detail-grid');
for (let i = 0; i < 2; i++) {
    const contactIcon = document.createElement('img');
    Object.assign(contactIcon, {
        src: iconSrc[i],
        alt: iconAlt[i]
    });
    const contactDetail = document.createElement('h2');
    contactDetail.textContent = contactText[i];
    contactDetails.append(contactIcon, contactDetail);
}
contactInfo.append(restaurant, contactDetails);

const openingHours = document.createElement('div');
const hourTitle = document.createElement('h1');
hourTitle.textContent = "Opening Hours";
const hourDetails = document.createElement('div');
hourDetails.classList.add('detail-grid');
for (let i = 0; i < 3; i++) {
    const day = document.createElement('h2');
    day.textContent = days[i];
    const hour = document.createElement('h2');
    hour.textContent = hours[i];
    hourDetails.append(day, hour);
}
openingHours.append(hourTitle, hourDetails);

export { contactInfo, openingHours };