const key = '506370e4661f78514f9f1e367391fc63';

getTempCity = () => {
  const tempResult = document.querySelector('.main-result__temp'),
    cityResult = document.querySelector('.main-result__subTitle'),
    inputGet = document.querySelector('.main-result-getting__input'),
    buttonGet = document.querySelector('.main-result-getting__button')
  imageResult = document.querySelectorAll('img')[1];

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
        .then(data => getResult(data.main.temp, data.name, data.weather[0].main))
    }
    else {
      console.log('ничего')
    }
  }

  function getResult(temp, city, weather) {
    switch (weather) {
      case 'Rain':
        imageResult.setAttribute('src', '../assets/rain.svg');
        break;
      case 'Clouds':
        imageResult.setAttribute('src', '../assets/clouds.svg');
        break;
      case 'Clear':
        imageResult.setAttribute('src', '../assets/sun.svg');
        break;
      case 'Snow':
        imageResult.setAttribute('src', '../assets/snow.svg');
        break;
      default:
        imageResult.setAttribute('src', '../assets/smiley.svg');
    }

    let tempGet = `${Math.round(temp)}`;
    let cityGet = `${city}`;
    tempResult.innerHTML = `<b>${tempGet}</b>`;
    cityResult.innerHTML = `<b>${cityGet}</b>`;
  }

  inputGet.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
      sendRequest();
    }
  });

  buttonGet.addEventListener('click', sendRequest);
}

document.addEventListener('DOMContentLoaded', getTempCity);