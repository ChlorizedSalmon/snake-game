import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import "./styles/base.css";
import NotFound from "./NotFound.jsx";
import Splash from "./Splash.jsx";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default App;
