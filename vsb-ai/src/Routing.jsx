  
import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import NoMatch from './Common/NoMatch.jsx';
import {  NaturalGasForecasting } from "./NaturalGasForecasting";

export default class Routing extends Component {
  render() {
    return (
        <Switch>
            <Route path="/" exact>
                <Redirect to="/natural-gas-forecasting" />
            </Route>
            <Route path="/natural-gas-forecasting" exact component={NaturalGasForecasting} />
            <Route component={NoMatch} state={{"kkk": 5}}/>
        </Switch>
    )
  }
}