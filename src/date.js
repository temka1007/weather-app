import "./index.css";

export default function setData(data) {
  const dateDiv = document.querySelector(".date");
  const tomorrowDiv = document.querySelector('.tomorrow .time');
  const dayAfterTomorrowDiv = document.querySelector('.day-after-tomorrow .time');

  let today = new Date(data[0].date);
  let tomorrow = new Date(data[1].date);
  let dayAfterTomorrow = new Date(data[2].date);

  today = today.toDateString().split(" ");
  tomorrow = tomorrow.toDateString().split(" ");
  dayAfterTomorrow = dayAfterTomorrow.toDateString().split(" ");

  dateDiv.textContent = `${today[1]} ${today[2]} ${today[3]}`;
  tomorrowDiv.textContent = `${tomorrow[1]} ${tomorrow[2]}`
  dayAfterTomorrowDiv.textContent = `${dayAfterTomorrow[1]} ${dayAfterTomorrow[2]}`

  console.log(data);
}
