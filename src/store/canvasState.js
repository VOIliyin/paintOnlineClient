import { makeAutoObservable } from 'mobx';

class CanvasState {
    canvas = null;
    undoList = [];
    redoList = [];

    constructor() {
        makeAutoObservable(this);
    }

    setCanvas(tool) {
        this.canvas = tool;
    }

    pushToUndo(data) {
        this.undoList.push(data);
    }

    pushToRedo(data) {
        this.redoList.push(data);
    }

    undo() {
        const ctx = this.canvas.getContext('2d');
        if (this.undoList.length) {
            const data = this.undoList.pop();
            this.pushToRedo(this.canvas.toDataURL());
            const img = new Image();
            img.src = data;
            img.onload = () => {
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            };
        }
    }

    redo() {
        const ctx = this.canvas.getContext('2d');
        if (this.redoList.length) {
            const data = this.redoList.pop();
            this.pushToUndo(this.canvas.toDataURL());
            const img = new Image();
            img.src = data;
            img.onload = () => {
                ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
            };
        }
    }
}

export default new CanvasState();
