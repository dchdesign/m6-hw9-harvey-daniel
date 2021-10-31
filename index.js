// var btn = document.querySelector('button')
// var forecastEl = document.getElementById('forecast')

var formEl = document.querySelector('form')
var inputEL = document.querySelector('input[type="text"]')
var weatherEL = document.getElementById('weather')
console.log(formEl,inputEL,weatherEL)



formEl.onsubmit = function(e) {
    e.preventDefault()
    var query = inputEl.value
    // console.log(query)
    fetch('https://api.openweathermap.org/data/2.5/weather?q=&units=imperial&appid=528fbf428cefbb3ae73ba5ed4014a523=' + query)
    .then(function(response) {
        return response.json()
    })
    .then(function(result) {
        console.log(result)
        console.log('weather')
    })
}


    // function renderWeather(weatherObject) {
    //     weatherEL.innerHTML = ""
    //     console.log(weatherObject.main)
    //     var main = document.createElement('h2')
    //     main.textContent = weatherObject.main +n (" + weatherObject.temp + ")
    //     weatherEL.appendChild(main)
          
    // }



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

