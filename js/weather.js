const API_KEY = "0e3d959b66216578eed1d3be1fe0942d";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(
        "#weather__container span:first-child"
      );
      const weather = document.querySelector(
        "#weather__container span:last-child"
      );
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${(
        data.main.temp - 273.15
      ).toFixed(1)}`;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
