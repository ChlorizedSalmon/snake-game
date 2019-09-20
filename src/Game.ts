import Component from './game/Component';
import Main from './game/Main';

class Game {
  main: Component;

  constructor() {
    this.main = new Main();
  }

  public render(canvas: HTMLCanvasElement) {
    const context: CanvasRenderingContext2D | null = canvas.getContext('2d');
    if (!context) return;
    this.main.render(context, canvas.width, canvas.height);
  }
}

export default Game;
