import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import { DashboardPage } from "./pages/DashboardPage";
import "tabler-react/dist/Tabler.css"
import { ShoppingList } from './components/ShoppingList';

const App: React.FC = () => {

  return (
    <div>
      <Router>
        <Route path="/" exact render={() => <DashboardPage/>} />
        <Route path="/shopping" exact render={() => <ShoppingList/>} />
      </Router>
    </div>
  );
}
export default App;
