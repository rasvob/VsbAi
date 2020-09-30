  
import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import NoMatch from './Common/NoMatch.jsx';
import ContactPage from './Pages/Contact.jsx';
import {  NaturalGasForecasting } from "./Pages/NaturalGasForecasting";

export default class Routing extends Component {
  render() {
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/natural-gas-forecasting" />
            </Route>
            <Route path="/natural-gas-forecasting" exact component={NaturalGasForecasting} />
            <Route path="/contact" exact component={ContactPage} />
            <Route component={NoMatch} />
        </Switch>
    )
  }
}