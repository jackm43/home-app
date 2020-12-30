import "tabler-react/dist/Tabler.css";
import React from 'react';
import axios from 'axios';
import { Page, Table, Loader } from "tabler-react";
import { TaskTable } from "../components/TaskTable"
import { DailyTable } from "../components/DailyTable"
import { TransportTable } from "../components/TransportTable"
import { ITransportData } from "../types/types"
import { useEffect, useState } from 'react';

const journeyData: ITransportData[] = []

export const DashboardPage: React.FC = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState<ITransportData[]>()
    
    useEffect(() => {
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
            setLoading(false);

        })
        
      }
      waitForJourneyApiData();
  
    }, [])
    if (isLoading) {
      return <Loader align="bottom"></Loader>
    }
    console.log(data)
    return (

        <Page.Content title="Dashboard">
          <Table headerItems={[{content: "Date"}, {content: "Depart"}, {content: "Arrive"}, {content: "Travel Time"}, {content: "Via"}, {content: "Line"}]}>
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
            </Table>
            <TaskTable/>
            <DailyTable/>
            {/* <TransportTable cards={journeyData}/> */}

        </Page.Content>
    );
}