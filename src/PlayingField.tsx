import * as React from 'react';
import Game from './Game';

interface Props {
}

interface State {
}

class PlayingField extends React.Component<Props, State> {
  private canvas: React.RefObject<HTMLCanvasElement>;
  private requestId: number = 0;
  private game: Game = new Game();
  private draw: FrameRequestCallback;

  constructor(props: Props) {
    super(props);
    this.canvas = React.createRef();
    this.draw = this.draw_.bind(this);
  }

  private draw_() {
    const canvas = this.canvas.current;
    if (canvas) {
      this.game.render(canvas);
    }
    if (this.draw) {
      this.requestId = requestAnimationFrame(this.draw);
    }
  }

  render(): JSX.Element {
    return (
      <canvas ref={this.canvas} className="field" />
    );
  }

  componentDidMount() {
    this.requestId = requestAnimationFrame(this.draw);
  }

  componentWillUnmount() {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
    }
  }
}

export default PlayingField;
