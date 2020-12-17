import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../APP/App';
import Auth1 from './Auth1';


class Marshrut extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Auth1} />
                <Route path='/main' component={App} />
                
            </Switch>
        )
    }
}

export default Marshrut;