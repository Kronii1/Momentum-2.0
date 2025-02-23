const API_KEY = import.meta.env.VITE_API_KEY;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather__city__name");
      const weatherIcon = document.querySelector("#weather__icons img");
      const weather = document.querySelector("#weather__icons span");
      city.innerText = data.name;
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weather.innerText = `${(data.main.temp - 273.15).toFixed(0)}°`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
