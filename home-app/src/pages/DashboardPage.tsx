import React from "react";
import {
    Page,
    Grid,
    Card,
    colors,
  } from "tabler-react";
import '../App.css';
import "tabler-react/dist/Tabler.css";
import { TaskTable } from "../components/TaskTable"
import { DailyTable } from "../components/DailyTable"
import { TransportTable } from "../components/TransportTable"

export const DashboardPage: React.FC= () => {
    return (
        <Page.Content title="Dashboard">
            <TaskTable/>
            <DailyTable/>
            <TransportTable/>

        </Page.Content>
    );
}