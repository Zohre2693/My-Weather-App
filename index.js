let now = new Date();
let dateInput = document.querySelector("#date-input");

let date = now.getDate();

let year = now.getFullYear();
let days = ["sun", "Mon", "tue", "wed", "thu", "Fri", "sat"];
let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];

dateInput.innerHTML = `📅 ${day},${month} ${date}, ${year}`;

let clockInput = document.querySelector("#clock-input");
let hours = now.getHours();
let minutes = now.getMinutes();
clockInput.innerHTML = `🕘 ${hours}:${minutes}`;
////////////////////////////////////////////////////////////////
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}
function searchCity(city) {
  let apiKey = "e6122b0499d90359858b12c35df58b7e";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(url).then(weather);
}
function weather(response) {
  let ciity = document.querySelector("#city-name");
  ciity.innerHTML = response.data.name;
  document.querySelector("#degree").innerHTML = Math.round(
    response.data.main.temp
  );
}
function location_b(position) {
  let apiKey = "e6122b0499d90359858b12c35df58b7e";

  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(url).then(weather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(location_b);
}
let currentLocationButton = document.querySelector("#location");
currentLocationButton.addEventListener("click", getCurrentLocation);
searchCity(" ");
