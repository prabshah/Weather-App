

const api = 'https://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&appid=74135956998ce2475c7ebcde0a57e073'
const unit = '&units=metric'

const getCurrent = document.getElementById('submit')
const display = document.getElementById('display')
const forecastDisplay = document.getElementById('display-forecast')
const forecastLists = document.getElementById('forecast-list')
const showForecast = document.getElementById('show-forecast')
let inputVal, city, url

const getWeather = () => {
    forecastDisplay.innerHTML = ''
    inputVal = document.getElementById('input').value;
    city = inputVal.toLowerCase(inputVal)
    if ( city != '' ) {
       url = api + city + apiKey + unit
        console.log(url)
       // featch the response from the openweather url

       fetch ( url )
       .then( function( response ) {
         return response.json()
       })
       .then( function(json) {
          //const info = ['City', 'Current Tempeture', 'Max Tempeture', 'Min Tempeture']
          const value = [json.name, json.weather[0].description, json.main.temp, json.main.temp_max, json.main.temp_min]
         
          currentWeather(value)
       })
       console.log(url)
       
    }
}
const currentWeather = (arr) => {
    var list = document.createElement('ul')
    list.setAttribute('id', 'currentWeather')
    for( i = 0; i < arr.length - 1; i++ ) {
        var listItm = document.createElement('li')
        if (i === 2) {
        listItm.innerHTML = arr[i] + '  °C'
        list.appendChild(listItm)
        } else if (i === 3) {
            listItm.innerHTML = '&#8657; '+ arr[i] + ' °C &nbsp;&nbsp; &#8659; ' + arr[i+1] + ' °C'
            list.appendChild(listItm) 
        }else {
            listItm.innerHTML = arr[i]
            list.appendChild(listItm) 
        }
    }
    display.innerHTML = ''
    display.appendChild(list)
    
    
}

var weatherForecast = () => {
    const forecastApi = 'https://api.openweathermap.org/data/2.5/forecast?q='

    inputVal = document.getElementById('input').value;
    city = inputVal.toLowerCase(inputVal)

    
    if( city != '' ) {

        url = forecastApi + city + apiKey + unit
       
        
        fetch ( url ) 
        .then( function( response ) {
            return response.json()
          })
        .then( function( json ) {
            const forecastData = json.list
            var forecastUl = document.createElement('ul')
            for ( i = 0; i < forecastData.length; i++ ) {
               
                var forecasts = document.createElement('li');
                forecasts.innerHTML = forecastData[i].dt_txt + '&nbsp;&nbsp;&nbsp;&nbsp; <span class = "mainTemp"> &nbsp;&nbsp;&nbsp;&nbsp;'+ forecastData[i].main.temp + '°C </span> <span class = "description">&nbsp;&nbsp;&nbsp;&nbsp;'+ forecastData[i].weather[0].description + '</span> <span lass="maxTemp">&nbsp;&nbsp;&nbsp;&nbsp; &#8657; ' + forecastData[i].main.temp_max + ' °C <span> <span class="minTemp">&nbsp;&nbsp;&nbsp;&nbsp; &#8659; ' + forecastData[i].main.temp_min + '°C </span>'
                forecastUl.appendChild(forecasts)
            }
            forecastDisplay.innerHTML = ''
            forecastDisplay.appendChild(forecastUl)
                
        })
        
    }
    
}

getCurrent.addEventListener('click', getWeather)
showForecast.addEventListener('click', weatherForecast)


