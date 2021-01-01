import "tabler-react/dist/Tabler.css";
import "../styles/custom.css"
import React from 'react';
import axios from 'axios';
import { Page, Table, Loader } from "tabler-react";
import { TaskTable } from "../components/TaskTable"
import { DailyTable } from "../components/DailyTable"
import { WeatherDisplay } from "../components/WeatherDisplay"
import { TransportTable } from "../components/TransportTable"
import { ITransportData, IWeatherData } from "../types/types"
import { useEffect, useState } from 'react';
import Clock from 'react-live-clock';

const journeyData: ITransportData[] = []
const weatherData: IWeatherData[] = []

export const DashboardPage: React.FC = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<ITransportData[]>()
    
    useEffect(() => {
      async function waitForWeatherApiData() {
        await axios.get(
          "http://localhost:3001/weather"
        ).then((response) => {
          let weatherDatas: IWeatherData[] = JSON.parse(response.request.response);
          weatherDatas.forEach((data: IWeatherData) => {
            let weatherObject = {
              temp: data.temp,
              feels_like: data.feels_like,
              humidity: data.humidity,
              sunset: data.sunset
            }
            
            weatherData.push(weatherObject)
          })
          console.log("test")
          setLoading(false);
        })
      }
      async function waitForJourneyApiData() {
        
        await axios.get(
          "http://localhost:3001/journeys"
        ).then((response) => {
          let travelData: ITransportData[] = JSON.parse(response.request.response);
          travelData.forEach((data: ITransportData) => {
            let travelObject = {
                departure_time: data.departure_time,
                arrival_time: data.arrival_time,
                line: data.line,
                travel_time: data.travel_time,
                transport_type: data.transport_type,
                date: data.date
              }
                journeyData.push(travelObject)
                
            })
            setData(journeyData)
            // setLoading(false);
        })
      }
      waitForJourneyApiData();
      waitForWeatherApiData();
  
    }, [])
    if (isLoading) {
      return <Loader align="bottom"></Loader>
    }
    console.log(data)


    return (

        <Page.Content title="Dashboard">
          <Clock format={'HH:mm:ss'} ticking={true} timezone={"Australia/Perth"}/>
          
          {
            weatherData.map((data: IWeatherData) => <WeatherDisplay 
                temp={data.temp}
                feels_like={data.feels_like}
                humidity={data.humidity}
                sunset={data.sunset}
                ></WeatherDisplay>
                )
            } 
          <Table className="table_bottom_position" headerItems={[{content: "Date"}, {content: "Depart"}, {content: "Arrive"}, {content: "Travel Time"}, {content: "Via"}, {content: "Line"}]}>
            {
                journeyData.map((data: ITransportData) => <TransportTable 
                    departure_time={data.departure_time}
                    arrival_time={data.arrival_time}
                    line={data.line}
                    travel_time={data.travel_time}
                    transport_type={data.transport_type}
                    date={data.date}
                    ></TransportTable>)
            } 
            {
              console.log(weatherData)
            }
          </Table>
          <TaskTable/>
          <DailyTable/>
        </Page.Content>
    );
}