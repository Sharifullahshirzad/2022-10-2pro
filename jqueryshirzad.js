

const api = {
    key: 'f758c4ea9548264da00e99e515d79f4b',
    url: 'https://api.openweathermap.org/data/2.5/'
}

var searchbox = document.querySelector('.search-box');

searchbox.addEventListener('keypress', setCity)

function setCity(e){

    if(e.keyCode == 13){
        // console.log(searchbox)
        getCityweather(searchbox.value)
    }
}

function getCityweather(City_name){
    // console.log(City_name)

    fetch(`${api.url}weather?q=${City_name}&units=matric&APPID=${api.key}`)
    .then(function(weather){
       return weather.json()
        
    })
    .then(showCityweather)
}

function showCityweather(weather){
    console.log(weather)
    var City = $('#City')
    City.html(`${weather.name}, ${weather.sys.country}`)

    var temp = $('#temp');
    temp.html(`${weather.main.temp}`)

    var theweather = $('#theweather');
    theweather.html(`${weather.weather[0].description}`)

    var hi = $('#hi')
    hi.html(`${weather.main.temp_max}`)

    var myimg = $('#myimg')
    // myimg.text(`${weather.weather[0].icon}`)
    myimg.html(`  <img src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png" alt="">`)

    var low = $('#low')
    low.html(`${weather.main.temp_max}`)
}