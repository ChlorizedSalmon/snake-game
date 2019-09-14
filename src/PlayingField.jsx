import React from 'react';

class PlayingField extends React.Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  render() {
    return (
      <canvas ref={this.canvas} className="field" />
    );
  }
}

export default PlayingField;
