import React from 'react';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import WeeklyView from './pages/WeeklyView';
import MonthlyView from './pages/MonthlyView';
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={WeeklyView}/>
        <Route exact path="/monthly" component={MonthlyView}/>
      </Switch>
    </div>
  );
};

export default App;
