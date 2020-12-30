import React, { Component, MouseEvent} from "react";
import { Table, Button, Grid, Card} from "tabler-react";

export const DailyTable: React.FC = () => {
    return (
        <Grid.Row>
            <Grid.Col md={4} offset={8}>
                <Card title="Daily Tasks">
                    <Table verticalAlign="centre">
                        <Table.Header>
                            <Table.ColHeader>Task</Table.ColHeader>
                            <Table.ColHeader>Complete Status</Table.ColHeader>
                        </Table.Header>
                    <Table.Body>
                        <Table.Row>
                            <Table.Col>Feed Dog Morning</Table.Col>
                            <Table.Col>
                                <Button color="primary">Complete</Button>
                            </Table.Col>
                        </Table.Row>
                        <Table.Row>
                            <Table.Col>Feed Dog Night</Table.Col>
                            <Table.Col>
                                <Button color="primary">Complete</Button>
                            </Table.Col>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Card>
            </Grid.Col>
        </Grid.Row>
    )
}