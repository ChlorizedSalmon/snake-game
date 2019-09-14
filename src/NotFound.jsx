import React from 'react';
import { Link } from 'react-router-dom';

import './styles/splash.scss';

function NotFound() {
  return (
    <div className="splash">
      <hgroup>
        <h1>404 NOT FOUND</h1>
      </hgroup>
      <nav>
        <Link to="/">홈</Link>
        <a href="https://github.com/ChlorizedSalmon/snake-game">코드 보기</a>
      </nav>
    </div>
  );
}

export default NotFound;
