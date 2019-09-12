import React from "react";

import "./styles/base.css";
import "./styles/splash.scss";

class App extends React.Component {
    render() {
        return (
            <div className="splash">
                <hgroup>
                    <h1>뱀 게임</h1>
                </hgroup>
                <nav>
                    <a>혼자 하기</a>
                    <a>온라인</a>
                </nav>
            </div>
        );
    }
}

export default App;
