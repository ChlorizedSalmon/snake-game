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
  private draw: FrameRequestCallback | null = null;

  constructor(props: Props) {
    super(props);
    this.canvas = React.createRef();
  }

  render(): JSX.Element {
    return <canvas ref={this.canvas} className="field" />;
  }

  componentDidMount() {
    this.draw = () => {
      const canvas = this.canvas.current;
      if (canvas) {
        this.game.render(canvas);
      }
      if (this.draw) {
        this.requestId = requestAnimationFrame(this.draw);
      }
    };
    this.requestId = requestAnimationFrame(this.draw);
  }

  componentWillUnmount() {
    if (this.requestId) {
      window.cancelAnimationFrame(this.requestId);
    }
  }
}

export default PlayingField;
