

const api = 'http://api.openweathermap.org/data/2.5/weather?q='
const apiKey = '&appid=74135956998ce2475c7ebcde0a57e073'
const unit = '&units=metric'

const submit = document.getElementById('submit')
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
          console.log(json) 
       })
  
    }
}

submit.addEventListener('click', getWeather)


