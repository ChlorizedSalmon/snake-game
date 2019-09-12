import React from "react";
import { Link } from 'react-router-dom';

import "./styles/splash.scss";

class Splash extends React.Component {
    render() {
        return (
            <div className="splash">
                <hgroup>
                    <h1>뱀 게임</h1>
                </hgroup>
                <nav>
                    <Link to="/single">혼자 하기</Link>
                    <Link to="/online">온라인</Link>
                </nav>
            </div>
        );
    }
}

export default Splash;
