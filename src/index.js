import "./index.css";

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360)
}

function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hourRatio = (minuteRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondRatio)
  setRotation(minuteHand, minuteRatio)
  setRotation(hourHand, hourRatio)
}

setInterval(setClock, 1000);

setClock()

async function getWeaterData() {
    const weather = await fetch("http://api.weatherapi.com/v1/current.json?key=a1fd7a18c7df45cd9cf15211232403&q=London&aqi=yes", {
        mode: "cors"
    })
    const data = await weather.json()

    console.log(data)
}

getWeaterData()