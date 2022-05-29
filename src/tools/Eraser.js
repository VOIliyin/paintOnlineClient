import { Brash } from './Brash';

export class Eraser extends Brash {
    draw(x, y) {
        this.ctx.strokeStyle = 'white';
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
    }
}
