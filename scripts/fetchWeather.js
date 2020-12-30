const { default: axios } = require("axios");


const apiKey = ""
const cityName = "Perth"
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`

async function retrieveWeatherData() {
    await axios.get(url).then(response => {
        this.response = response.data
        let sunset = response.data.sys.sunset
        let weatherData = {
            "temp": response.data.main.temp,
            "feels_like": response.data.main.feels_like,
            "humidity": response.data.main.humidity,
            "sunset": sunset
        }
        console.log(weatherData)
    })
}

retrieveWeatherData()