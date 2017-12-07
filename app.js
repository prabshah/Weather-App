

const api = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&appid=74135956998ce2475c7ebcde0a57e073'
const unit = '&units=metric'

const submit = document.getElementById('submit')
const display = document.getElementById('display')
let inputVal, city, url

const getWeather = () => {
    inputVal = document.getElementById('input').value;
    city = inputVal.toLowerCase(inputVal)
    if ( city != '' ) {
       url = api + city + apiKey + unit
       
       // featch the response from the openweather url

       fetch ( url )
       .then( function( response ) {
         return response.json()
       })
       .then( function(json) {
          const info = ['City', 'Current Tempeture', 'Max Tempeture', 'Min Tempeture']
          const value = [json.name, json.main.temp, json.main.temp_max, json.main.temp_min]
         
          showData(info, value)
       })
  
    }
}
const showData = (arrOne, arrTwo) => {
    var list = document.createElement('ul')
    for( i = 0; i < arrOne.length; i++ ) {
        var listItm = document.createElement('li')
        if (i > 0 && i < 4) {
        listItm.innerHTML = arrOne[i] + '  :   ' + arrTwo[i] + '  °C'
        list.appendChild(listItm)
        } else {
            listItm.innerHTML = arrOne[i] + '  :   ' + arrTwo[i]
            list.appendChild(listItm) 
        }
    }
    display.innerHTML = ''
    display.appendChild(list)
}
submit.addEventListener('click', getWeather)


