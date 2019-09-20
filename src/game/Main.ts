import Component from './Component';

class Main implements Component {
  render(context: CanvasRenderingContext2D, w: number, h: number) {
    console.log('test');
  }
}

export default Main;
