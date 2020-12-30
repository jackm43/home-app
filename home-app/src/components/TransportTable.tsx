import React from "react";
import { Table } from "tabler-react";
import { ITransportData } from "../types/types"

export const TransportTable: React.FC<ITransportData> = ({departure_time, arrival_time, line, travel_time, transport_type, date}) => {
    return (
            <Table.Body>
                <Table.Col>{date}</Table.Col>
                <Table.Col>{departure_time}</Table.Col>
                <Table.Col>{arrival_time}</Table.Col>
                <Table.Col>{travel_time}</Table.Col>
                <Table.Col>{transport_type}</Table.Col>
                <Table.Col>{line}</Table.Col>
            </Table.Body>
    )
}