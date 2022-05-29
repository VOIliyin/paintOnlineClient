import { makeAutoObservable } from 'mobx';

class ToolState {
    tool = null;

    constructor() {
        makeAutoObservable(this);
    }

    setTool(tool) {
        this.tool = tool;
    }

    setWidth(width) {
        this.tool.width = width;
    }

    setColor(color) {
        this.tool.color = color;
    }
}

export default new ToolState();
