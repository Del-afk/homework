let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  moscow: {
    temp: -5,
    humidity: 20,
  },
};
let output = "";
// // let whitchCity = prompt("whitch City do you want to search?");
// if (typeof weather[whitchCity] !== "undefined") {
//   output = `in ${whitchCity} city the weather temp is ${Math.round(
//     weather[whitchCity].temp
//   )} and the humidity is ${Math.round(weather[whitchCity].humidity)}`;
// } else {
//   output = `Sorry :( we dont have any data for ${whitchCity} city! please check https://www.google.com/search?q=weather+${whitchCity}`;
// }
// alert(output);
let now = new Date();
let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// let today = weekday[now.getDay()];
// let hour = now.toTimeString();
// document.getElementById("nowdates").innerHTML = `${today} , ${hour}`;
// -----------------------------
let searchButton = document.getElementById("button-addon2");
searchButton.addEventListener("click", changeCity);
//-------------------------------
// let degree = document.getElementById("maindegree");
// let celicus = document.getElementById("cel");
// let farenhit = document.getElementById("far");
// celicus.addEventListener("click", function () {
//   degree.innerHTML = 13;
// });
// farenhit.addEventListener("click", function () {
//   degree.innerHTML = 66;
// });
//---------------------------------
let searchForm = document.getElementById("searchform");
searchForm.addEventListener("submit", changeCity);

function changeCity(event) {
  let searchInput = document.getElementById("searchinput");
  let originCity = document.getElementById("cityname");
  let cityName = searchInput.value;
  originCity.innerHTML = cityName;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e3cdc0b1dbf9776123c5bb78c148ccf4&&units=metric`;
  let degree = document.getElementById("maindegree");
  let weatherStatus = document.getElementById("weatherstatus");
  degree.innerHTML = "loading";
  fetch(apiUrl)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.cod == 404) {
        degree.innerHTML = "not available";
      } else {
        degree.innerHTML = Math.round(data.main.temp);
        weatherStatus.innerHTML = data.weather[0].main;
      }
    });
  event.preventDefault();
}
