import React, { Component } from "react";
import {
    Grid,
    Card,
  } from "tabler-react";

interface IAwsMetrics {
    placeholder: string
}

export const PercentCards: React.FC<IAwsMetrics> = () => {
    return (
        <Grid.Row cards={true}>
            <Grid.Col width={6} sm={4} lg={3}>
                <Card title="yo"
                body="429"
                />
            </Grid.Col>

        </Grid.Row>
    )
}