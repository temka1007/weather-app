import "./index.css";
import setClock from "./clock";
import setlocation from "./location";
import setDate from "./date";
import { today, tomorrow, dayAfterTomorrow } from "./forecast";

setInterval(setClock, 1000);
setClock();

//------------------------------------------------------

const input = document.querySelector("input");
const searchBtn = document.querySelector(".search");

function error404() {
  const forecast = document.querySelector(".forecast-container");

  forecast.removeChild(forecast.lastChild)
  
  const container = document.createElement("div");
  const errorMessage = document.createElement("div")

  container.classList.add("error")
  errorMessage.textContent = "City not found ‾\\(o_o)/‾"

  forecast.append(container)
  container.append(errorMessage)

  setTimeout(() => {
    forecast.removeChild(forecast.lastChild)
  }, 2000);
}

function loading() {
  const forecast = document.querySelector(".forecast-container");
  const container = document.createElement("div"); 
  const gif = document.createElement("div"); 

  container.classList.add("loading")

  forecast.append(container)
  container.appendChild(gif)
}



async function getWeaterData(cityName) {
  let response = 0;
  loading()

  try {
    const weather = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=a1fd7a18c7df45cd9cf15211232403&q=${cityName}&days=3&aqi=no&alerts=no`,
      {
        mode: "cors",
      }
    );

    const data = await weather.json();

    today(data);
    tomorrow(data);
    dayAfterTomorrow(data);

    setlocation(
      data.location.region,
      data.location.country,
      data.location.name
    );
    setDate(data.forecast.forecastday);

    const unitConverterBtn = document.querySelector(".unit-converter");
    unitConverterBtn.textContent = "F";

    if (weather.ok) {
      response += 1;
    }
  } catch (error) {
    error404();
  } finally {
    if (response === 1) {
      const forecast = document.querySelector(".forecast-container");
      forecast.removeChild(forecast.lastChild)
    }
  }
}

searchBtn.addEventListener("click", () => {
  getWeaterData(input.value);
  input.value = "";
});

window.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeaterData(input.value);
    input.value = "";
  }
});

getWeaterData("new york");
