import React, { useEffect, useState } from 'react';

import { HashRouter as Router, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import './App.css';
import "tabler-react/dist/Tabler.css"

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Route path="/" exact render={() => <DashboardPage/>} />
      </Router>
    </div>
  );
}

export default App;
