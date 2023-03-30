/* eslint-disable no-param-reassign */
import "./index.css";
import clearDay from "./images/icons/clear-day.svg";
import clearNight from "./images/icons/clear-night.svg";
import cloudy from "./images/icons/cloudy.svg";
import dust from "./images/icons/dust.svg";
import fog from "./images/icons/fog.svg";
import hail from "./images/icons/hail.svg";
import haze from "./images/icons/haze.svg";
import mist from "./images/icons/mist.svg";
import overcast from "./images/icons/overcast.svg";
import partlyCloudyDayDrizzle from "./images/icons/partly-cloudy-day-drizzle.svg";
import partlyCloudyDay from "./images/icons/partly-cloudy-day.svg";
import rain from "./images/icons/rain.svg";
import sleet from "./images/icons/sleet.svg";
import smoke from "./images/icons/smoke.svg";
import thunderstormsDayRain from "./images/icons/thunderstorms-day-rain.svg";
import thunderstorms from "./images/icons/thunderstorms-rain.svg";
import snow from "./images/icons/snow.svg";

export default function setConditionIcon(condition, div) {
  const array = condition.toLowerCase().split(" ")

  if (array.includes("sunny")) {
    div.src = clearDay;
  } 
  if (array.includes("clear")) {
    div.src = clearNight;
  } 
  if (array.includes(("partly sunny" || "mostly sunny"))) {
    div.src = partlyCloudyDay;
  } 
  if (array.includes(("scattered thunderstorms" || "chance of storm"|| "Chance of Thundertorms"))) {
    div.src = thunderstormsDayRain;
  } 
  if (array.includes("fog")) {
    div.src = fog;
  } 
  if (array.includes("dust")) {
    div.src = dust;
  } 
  if (array.includes(("snow" || "icy" || "flurries"))) {
    div.src = snow;
  } 
  if (array.includes(("cloudy" || "mostly Cloudy" || "partly Cloudy"))) {
    div.src = cloudy;
  } 
  if (array.includes(("hail" || "chance of snow"|| "snow showers"))) {
    div.src = hail;
  } 
  if (array.includes("smoke")) {
    div.src = smoke;
  } 
  if (array.includes(("sleet" || "rain and snow"))) {
    div.src = sleet;
  } 
  if (array.includes(("haze" || "light snow"))) {
    div.src = haze;
  } 
  if (array.includes(("light rain" || "chance of rain" || "showers" || "scattered showers" || "freezing drizzle"))) {
    div.src = partlyCloudyDayDrizzle;
  } 
  if (array.includes("rain")) {
    div.src = rain;
  } 
  if (array.includes("overcast")) {
    div.src = overcast;
  } 
  if (array.includes(("storm"|| "thunderstorm"))) {
    div.src = thunderstorms;
  } 
  if (array.includes("mist")) {
    div.src = mist;
  } 
}
