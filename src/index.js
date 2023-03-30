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

async function getWeaterData(cityName) {
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
  } catch (error) {
    console.log(error.message);
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
