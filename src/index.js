function searchSubmit(event) {
  event.preventDefault();
  function displayCityWeather(response) {
    let city = response.data.city;
    let temperature = Math.round(response.data.temperature.current);
    let headingCity = document.querySelector("#place");
    let headingTemp = document.querySelector("#temperature");
    headingCity.innerHTML = city;
    headingTemp.innerHTML = temperature;
  }
  let search = document.querySelector("#search-city");
  let searchValue = search.value;
  let apiKey = "ba3t92f6af6b8204143cbo1c5a032ba3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${searchValue}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayCityWeather);
}

function formatDate(date) {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let weekDay = week[day];

  return `${weekDay} ${hour}:${minutes}`;
}

let form = document.querySelector("#form");
form.addEventListener("submit", searchSubmit);

let currentDate = new Date();
let spanDate = document.querySelector("#current-date");
spanDate.innerHTML = formatDate(currentDate);
