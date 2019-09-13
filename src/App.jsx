import React from "react";
import {
    Route,
    Switch
} from 'react-router-dom';

import "./styles/base.css";
import NotFound from "./NotFound.jsx";
import Splash from "./Splash.jsx";
import Single from "./Single.jsx";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Splash} />
                <Route path="/single" component={Single} />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

export default App;
