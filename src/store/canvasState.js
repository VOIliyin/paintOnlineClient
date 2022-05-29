import { makeAutoObservable } from 'mobx';

class CanvasState {
    canvas = null;

    constructor() {
        makeAutoObservable(this);
    }

    setCanvas(tool) {
        this.canvas = tool;
    }
}

export default new CanvasState();
