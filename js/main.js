const url = 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}';
const key = '506370e4661f78514f9f1e367391fc63';

getTempCity = () => {
  const tempResult = document.querySelector('.main-result__temp'),
    cityResult = document.querySelector('.main-result__subTitle'),
    inputGet = document.querySelector('.main-result-getting__input'),
    buttonGet = document.querySelector('.main-result-getting__button');

  function sendRequest() {
    if (inputGet.value != '') {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputGet.value}&appid=${key}&units=metric`)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          } else {
            console.log('status ne 200')
          }
        })
        .then(data => getResult(data.main.temp, data.name))
    }
    else {
      console.log('ничего')
    }
  }

  function getResult(temp, city) {
    let tempGet = `${Math.round(temp)}`;
    let cityGet = `${city}`;
    tempResult.innerHTML = `<b>${tempGet}</b>`
    cityResult.innerHTML = `<b>${cityGet}</b>`;
  }
  buttonGet.addEventListener('click', sendRequest);
}

document.addEventListener('DOMContentLoaded', getTempCity);