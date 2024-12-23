const apiKey = '26dda8b379e1f2eca6237b7b81ca5aad';
let cityName = 'Karac';
const apiLink = `https://api.openweathermap.org/data/2.5/weather?`;

const getButton = document.querySelector('.inputCityButton');
const getText = document.querySelector('.inputCity');
getButton.addEventListener('click',()=>{weatherCheck()});

getText.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      weatherCheck();
  }
});

const addCity = document.querySelector('.inputCity');

async function weatherCheck(){
  addCityName();
  cityName = addCity.value;
  const finalLink = `${apiLink}q=${cityName}&appid=${apiKey}&units=metric`;
  const response = await fetch(finalLink);
  var data = await response.json();
  console.log(data);
  document.querySelector('.temp').innerHTML = data.main.temp;
  document.querySelector('.city').innerHTML = data.name;
  document.querySelector('.country').innerHTML = `Country: ${data.sys.country}`;
  document.querySelector('.feel').innerHTML = data.main.feels_like;
  document.querySelector('.humidity').innerHTML = data.main.humidity;
  document.querySelector('.weatherCondition').innerHTML = data.weather[0].description;
  document.querySelector('.windSpeed').innerHTML = data.wind.speed;
  
  addCity.value = '';
}

function addCityName(){
  cityName = document.querySelector('.inputCity').value;
  console.log(cityName);
}