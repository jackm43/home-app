import React from "react";
import { Card, Grid, Text } from "tabler-react";
import { IWeatherData } from "../types/types"

export const WeatherDisplay: React.FC<IWeatherData> = ({temp, feels_like, humidity, sunset}) => {
    return (
            // <Grid.Row>
            //     <Grid.Col md={4} offset={8}>
                    <Text className="big-text" align="left" >
                        {temp}°
                    </Text>
            //     </Grid.Col>
            // </Grid.Row>
    )
    }
