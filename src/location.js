import "./index.css";

export default function setLocation(city, country, name) {
    const location = document.querySelector(".city")
    if (city === '') {
        location.textContent = `${name}, ${country}`;
    } else {
        location.textContent = `${city}, ${country}`;
    }
    
}