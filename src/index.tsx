import React from 'react';
import ReactDOM from 'react-dom';
import App from './todoApp/App';
import Sobre from './todoApp/Sobre';
import Home from './alexcesar';
import Call from './alexcesar/Call';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

ReactDOM.render(
<BrowserRouter>
    <Switch>
        <Route path="/todo" exact={true} component={App} />
        <Route path="/" exact={true} component={Home} />
        <Route path="/call" exact={true} component={Call} />
        <Sobre path={'/sobre'} link={'https://google.com.br'} />

        
        {/* <Route path="/todo" render={() => (
            <Redirect to="https://alexcesar.com" />
        )} /> */}
    </Switch>
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
