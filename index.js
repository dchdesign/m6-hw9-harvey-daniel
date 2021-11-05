// var btn = document.querySelector('button')
// var forecastEl = document.getElementById('forecast')

var formEl = document.querySelector('form')
var inputEL = document.querySelector('input[type="text"]')
var weatherEL = document.getElementById('weather')
console.log(formEl,inputEL,weatherEL)



formEl.onsubmit = function(e) {
    e.preventDefault()
    var query = inputEL.value
    // console.log(query)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + query + '&units=imperial&appid=528fbf428cefbb3ae73ba5ed4014a523')
    .then(function(response) {
        return response.json()
    })
    .then(function(result) {
        renderWeather(result)
        // console.log(result)
        
    })
}

    function renderWeather(weatherObj) {
        weatherEL.innerHTML = ""

        var weather = document.createElement('h2')
        weather.textContent = weatherObj.temp + " (" + weatherObj.feels_like + ")"
        weatherEL.appendChild(weather)      
        
        
    }



// btn.onclick = function() {
//     //console.log('clicked')
//     fetch()
//     .then(function(res) {
//         return res.json()
//     

//     res.results.forEach(function() {
//         var container = document.createElement('div')
//         var img = document.createElement('img')
//         img.src = 
//         container.appendChild
//     })
// }

