const body = document.querySelector('body')
const button = document.querySelector('button')
let input = document.querySelector('input')
const errorMessage = document.getElementById('error')
const result = document.getElementById('result')

function api(cityName) {
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=478ec44dc08869547c1007d0e3cf1bf7`)
        .then((response) => {
            if (response.ok)
                return response.json()
            if (response.status >= 400)
                return response.json()
                    .then(data => Promise.reject(data))
        })
}

function displayData(cityName) {
    //creat the elements 
    const city = document.createElement('p')
    city.innerText = cityName;
    const p = document.createElement('p')
    const icon = document.createElement('img')
    const wind = document.createElement('p')
    const cloud = document.createElement('p')
    const sunRise = document.createElement('p')
    const sunSet = document.createElement('p')
    // fetch the data

    api(cityName)
        .then(data => {
            tempInkalvin = data.main.temp
            const tempInCelsius = (tempInkalvin - 273.15).toFixed(2);
            p.innerHTML = `${tempInCelsius} c<sup>o</sup> `;
            icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`; // src is wrong
            wind.innerText = `${data.wind.speed} m/s`;
            cloud.innerText = `Cloudiness ${data.clouds.all} %`;
            sunRise.innerText = `sunrise : ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()} `;
            sunSet.innerText = `sunset : ${new Date(data.sys.sunset * 1000).toLocaleTimeString()} `;
            input.value = ""
            // append the elements to the result div
            result.appendChild(city)
            result.appendChild(p)
            result.appendChild(icon)
            result.appendChild(wind)
            result.appendChild(cloud)
            result.appendChild(sunRise)
            result.appendChild(sunSet)
        }).catch((error) => {
            errorMessage.innerText = error.message
        })


}
button.addEventListener('click', () => {
    result.innerHTML = '';
    errorMessage.innerHTML = '';
    const cityName = input.value
    displayData(cityName)
})
