import "./index.css";
import setConditionIcon from "./weatherCondition";

// const todayDiv = document.querySelector('.today');
// const tomorrowDiv = document.querySelector('.tomorrow');
// const dayAfterTomorrowDiv = document.querySelector('.day-after-tomorrow');

function unitConverter(c, f, div) {
  const unitConverterBtn = document.querySelector(".unit-converter");
  let unit = 0;

  unitConverterBtn.addEventListener("click", () => {
    if (unit === 0) {
      div.textContent = `${f}°F`;
      unit = 1;
      unitConverterBtn.textContent = "C";
    } else if (unit === 1) {
      div.textContent = `${c}°C`;
      unit = 0;
      unitConverterBtn.textContent = "F";
    }
  });
}

export function today(data) {
  const fahrenheit = data.forecast.forecastday[0].day.avgtemp_f;
  const celcius = data.forecast.forecastday[0].day.avgtemp_c;
  const condition = data.forecast.forecastday[0].day.condition.text;

  // condition
  const conditionIcon = document.querySelector(".today .icon img");
  setConditionIcon(condition, conditionIcon);

  // temperature
  const todayTemperatureDiv = document.querySelector(".today .temperature");
  todayTemperatureDiv.textContent = `${celcius}°C`;

  unitConverter(celcius, fahrenheit, todayTemperatureDiv);
}

export function tomorrow(data) {
  const fahrenheit = data.forecast.forecastday[1].day.avgtemp_f;
  const celcius = data.forecast.forecastday[1].day.avgtemp_c;
  const condition = data.forecast.forecastday[1].day.condition.text;

  // condition
  const conditionIcon = document.querySelector(".tomorrow .icon img");
  setConditionIcon(condition, conditionIcon);

  // temperature
  const tomorrowTemperatureDiv = document.querySelector(
    ".tomorrow .temperature"
  );
  tomorrowTemperatureDiv.textContent = `${celcius}°C`;

  unitConverter(celcius, fahrenheit, tomorrowTemperatureDiv);
}

export function dayAfterTomorrow(data) {
  const fahrenheit = data.forecast.forecastday[2].day.avgtemp_f;
  const celcius = data.forecast.forecastday[2].day.avgtemp_c;
  const condition = data.forecast.forecastday[2].day.condition.text;

  // condition
  const conditionIcon = document.querySelector(".day-after-tomorrow .icon img");
  setConditionIcon(condition, conditionIcon);

  // temperature
  const dayAfterTomorrowDiv = document.querySelector(
    ".day-after-tomorrow .temperature"
  );
  dayAfterTomorrowDiv.textContent = `${celcius}°C`;

  unitConverter(celcius, fahrenheit, dayAfterTomorrowDiv);
}
