import { Subject } from 'rxjs';

export class Game extends Subject<number> {
  state = 12;

  increase() {
    this.state++;
    this.next(this.state);
  }
}

export default new Game();
