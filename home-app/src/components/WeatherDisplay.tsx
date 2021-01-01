import React from "react";
import { Card, Grid } from "tabler-react";
import { IWeatherData } from "../types/types"

export const WeatherDisplay: React.FC<IWeatherData> = ({temp, feels_like, humidity, sunset}) => {
    return (
            <Grid.Row>
                <Grid.Col md={4} offset={8}>
                    <Card title="Weather">
                        Temp: {temp}
                    </Card>
                </Grid.Col>
            </Grid.Row>
    )
    }
