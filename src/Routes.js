import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/homePage/HomePage';
import Characters from './pages/charactersPage/Characters';

import LocationPage from "./pages/locationPage/LocationPage";
import Header from './component/Header';
import CharacterDetails from './pages/charactersPage/CharacterDetails';
import LocationDetails from './pages/locationPage/LocationDetails';

function Routes() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/characters/:id" component={CharacterDetails} />
            <Route path="/characters" component={Characters} />
            <Route path="/location/:id" component={LocationDetails} />
            <Route path="/location" component={LocationPage} />
          </Switch>
        </Router>
      </div>
    );
}

export default Routes
