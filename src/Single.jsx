import React from 'react';

import './styles/game.scss';
import PlayingField from './PlayingField.jsx';

const width = 10,
  height = 10;

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: Array.from(Array(height), () =>
        Array.from(Array(width), () => Math.random()),
      ),
    };
  }
  render() {
    return (
      <div className="game">
        <div>
          <PlayingField class="field" field={this.state.field} />
        </div>
      </div>
    );
  }
}

export default Single;
