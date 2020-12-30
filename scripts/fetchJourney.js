const axios = require("axios")

const puppeteer = require('puppeteer');

function constructDate() {
    let currentDate = new Date().toISOString().slice(0,10); 
    return currentDate
}
function constructTime() {
    let hour = new Date().getHours().toString().padStart(2, '0')
    let minutes = new Date().getMinutes().toString()
    const time = `${hour}:${minutes}`
    return time
}

function constructQueryUrl(fromAddress, toAddress, currentDate, currentTime) {
    let query = `https://www.transperth.wa.gov.au/Journey-Planner/Results?from=${fromAddress}&fromtype=psma_addresses&to=${toAddress}&totype=psma_addresses&date=${currentDate}&time=${currentTime}`
    return query
}

async function journey(query) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(query, { waitUntil: 'networkidle0' });
    let data = await page.evaluate(() => {
        let first = document.querySelector('tr[class="first active"]').innerText;
        let trimmedTravelData = first.replace(/\t/g,' ').replace(/\n/g, ' ').replace("VIEW JOURNEY OPTION 1", '').split(" ")
        let departTime = trimmedTravelData[0]
        let arriveTime = trimmedTravelData[1]
        let travelTime = trimmedTravelData[2] + trimmedTravelData[3]
        let transportType = trimmedTravelData[8]
        let station = trimmedTravelData[9]
  
        let travelData = {
            "departTime": departTime,
            "arriveTime": arriveTime,
            "travelTime": travelTime,
            "transportType": transportType,
            "line": station
        }
        return {
            travelData
        }
    })
    await browser.close();
    return data
  };

async function postJourneyToApi(journeyData) {
    let insert = {
        "departure_time": journeyData.travelData.departTime,
        "arrival_time": journeyData.travelData.arriveTime,
        "line": journeyData.travelData.line,
        "travel_time": journeyData.travelData.travelTime,
        "transport_type": journeyData.travelData.transportType,
        "date": constructDate()
    }

    const res = await axios.post("http://localhost:3001/newjourney", insert)
    console.log(res);
}
async function main() {
    let date = constructDate();
    let time = constructTime();
    // FORMAT: {number} {STREETNAME ST/TURN/WHATEVER, SUBURB}
    let fromAddress = encodeURI("");
    let toAddress = encodeURI("")

    let query = constructQueryUrl(fromAddress, toAddress, date, time);

    let journeyData = await journey(query);
    await postJourneyToApi(journeyData);

}


main();