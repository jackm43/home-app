import React from "react";
import { Table, Grid} from "tabler-react";
import { ITransportData } from "../types/types"

export const TransportTable: React.FC<ITransportData> = ({departure_time, arrival_time, line, travel_time, transport_type, date}) => {
    // TODO: Refactor component so it doesnt render the header columns 50 times
    return (

        <Grid.Row>
            <Grid.Col width={20}>

        <Table verticalAlign="centre">
        <Table.Header>
                <Table.ColHeader>Date</Table.ColHeader>
                <Table.ColHeader>Depart</Table.ColHeader>
                <Table.ColHeader>Arrive</Table.ColHeader>
                <Table.ColHeader>Travel Time</Table.ColHeader>
                <Table.ColHeader>Via</Table.ColHeader>
                <Table.ColHeader>Line</Table.ColHeader>
            </Table.Header>
            <Table.Body>
                <Table.Col>{date}</Table.Col>
                <Table.Col >{departure_time}</Table.Col>
                <Table.Col >{arrival_time}</Table.Col>
                <Table.Col >{travel_time}</Table.Col>
                <Table.Col >{transport_type}</Table.Col>
                <Table.Col>{line}</Table.Col>
            </Table.Body>
        </Table>
        </Grid.Col>
        </Grid.Row>
    )
}