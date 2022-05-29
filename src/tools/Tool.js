export default class Tool {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.destroyEvent();
    }

    set color(color) {
        this.ctx.strokeStyle = color;
    }

    set width(width) {
        this.ctx.lineWidth = width;
    }

    destroyEvent() {
        this.canvas.onmousemove = null;
        this.canvas.onmousedown = null;
        this.canvas.onmouseup = null;
    }
}
