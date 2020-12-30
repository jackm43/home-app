import { Page } from "tabler-react";
import "tabler-react/dist/Tabler.css";
import React, { useEffect, useState } from 'react';
import { TaskTable } from "../components/TaskTable"
import { DailyTable } from "../components/DailyTable"
import { TransportTable } from "../components/TransportTable"
import axios from 'axios';
import { ITransportData } from "../types/types"

const journeyData: ITransportData[] = []

export const DashboardPage: React.FC= () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<ITransportData[]>()
    
    useEffect(() => {
      async function waitForJourneyApiData() {
        console.log("hello")
        await axios.get(
          "http://localhost:3001/journeys"
        ).then((response) => {
          let travelData: ITransportData[] = JSON.parse(response.request.response);
          travelData.forEach((data: any) => {
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
            setLoading(false);

        })
        
      }
      waitForJourneyApiData();
  
    }, [])
    if (isLoading) {
      return <div className="App">Loading...</div>
    }
    console.log(data)
    return (

        <Page.Content title="Dashboard">
            {
                journeyData.map((data: any) => <TransportTable 
                    departure_time={data.departure_time}
                    arrival_time={data.arrival_time}
                    line={data.line}
                    travel_time={data.travel_time}
                    transport_type={data.transport_type}
                    date={data.date}
                    ></TransportTable>)
            } 
            <TaskTable/>
            <DailyTable/>
            {/* <TransportTable cards={journeyData}/> */}

        </Page.Content>
    );
}