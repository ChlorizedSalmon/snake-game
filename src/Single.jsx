import React from 'react';

import './styles/game.sass';
import PlayingField from './PlayingField.tsx';

const width = 10;
const height = 10;

class Single extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: Array.from(Array(height), () => Array.from(Array(width), () => Math.random())),
    };
  }

  render() {
    const { field } = this.state;
    return (
      <PlayingField field={field} />
    );
  }
}

export default Single;
