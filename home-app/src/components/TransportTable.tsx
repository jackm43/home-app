import React, { Component, MouseEvent} from "react";
import { Table, Button, Grid} from "tabler-react";

export const TransportTable: React.FC = () => {
    return (
        <Grid.Row>
            <Grid.Col width={20}>

        <Table verticalAlign="centre">
            <Table.Header>
                <Table.ColHeader>Depart</Table.ColHeader>
                <Table.ColHeader>Arrive</Table.ColHeader>
                <Table.ColHeader>Travel Time</Table.ColHeader>
                <Table.ColHeader>Via</Table.ColHeader>
            </Table.Header>
            <Table.Body>
                <Table.Col>7:53AM</Table.Col>
                <Table.Col>8:22AM</Table.Col>
                <Table.Col>29mins</Table.Col>
                <Table.Col>Train</Table.Col>
            </Table.Body>
        </Table>
        </Grid.Col>
        </Grid.Row>
    )
}