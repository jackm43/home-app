import React, { Component, MouseEvent} from "react";
import { Table, Button, Grid, Card} from "tabler-react";
import { GeneratedIdentifierFlags } from "typescript";

export const TaskTable: React.FC = () => {
    return (
        <Grid.Row>
            <Grid.Col md={4} offset={8}>
            <Card title="Upcoming tasks and bills">
                <Table>
                    <Table.Header>
                        <Table.ColHeader>Upcoming Tasks</Table.ColHeader>
                        <Table.ColHeader>Complete Status</Table.ColHeader>
                    </Table.Header>
                    <Table.Body>
                        <Table.Row>
                        <Table.Col>Bins</Table.Col>
                        <Table.Col>
                            <Button color="primary">Complete</Button>
                        </Table.Col>
                        </Table.Row>
                        <Table.Row>
                            <Table.Col>Rego</Table.Col>
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