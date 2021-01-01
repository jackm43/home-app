const { default: axios } = require("axios");

// https://home.openweathermap.org/

const apiKey = ""
const cityName = "Perth"
// TODO: Query parameters for this stuff
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`

function main() {
    checkIfWeatherExistsinApi();
    // retrieveWeatherData();
}

async function checkIfWeatherExistsinApi() {
        // TODO: This is just temp workaround. Should really just change how the data is retrieved or stored.
        // In future it would be good to have the days historic weather
    const res = await axios.get("http://localhost:3001/weather").then(async response => {
        if (Object.keys(response.data).length > 0) {
            const res = await axios.delete("http://localhost:3001/deleteallweather");
            console.log(res.data);
        }
    retrieveWeatherData();
    })
}

async function retrieveWeatherData() {
    await axios.get(url).then(response => {
        this.response = response.data
        let sunset = response.data.sys.sunset
        let weatherData = {
            "temp": response.data.main.temp,
            "feels_like": response.data.main.feels_like,
            "humidity": response.data.main.humidity,
            "sunset": sunset
        };
        postJourneyToApi(weatherData);
    })
}

async function postJourneyToApi(weatherData) {
    const res = await axios.post("http://localhost:3001/newweather", weatherData);
    console.log(res.data);
}

main();