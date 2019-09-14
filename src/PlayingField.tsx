import * as React from 'react';

interface Props {
}

interface State {
}

class PlayingField extends React.Component<Props, State> {
  private canvas: React.RefObject<HTMLCanvasElement>;

  constructor(props: Props) {
    super(props);
    this.canvas = React.createRef();
  }

  render(): JSX.Element {
    return (
      <canvas ref={this.canvas} className="field" />
    );
  }
}

export default PlayingField;
