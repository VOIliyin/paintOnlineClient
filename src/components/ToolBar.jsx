import React from 'react';
import '../styles/toolbar.scss'
import toolState from '../store/toolState';
import canvasState from '../store/canvasState';
import { Brash } from '../tools/Brash';
import { Rect } from '../tools/Rect'
import { Circle } from '../tools/Circle';
import { Line } from '../tools/Line';
import { Eraser } from '../tools/Eraser';

function ToolBar() {
    return (
        <div className="toolbar">
            <div className="toolbar__paint">
                <button className="toolbar__btn brush" onClick={() => toolState.setTool(new Brash(canvasState.canvas))} />
                <button className="toolbar__btn rect" onClick={() => toolState.setTool(new Rect(canvasState.canvas))}/>
                <button className="toolbar__btn circle" onClick={() => toolState.setTool(new Circle(canvasState.canvas))}/>
                <button className="toolbar__btn eraser" onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}/>
                <button className="toolbar__btn line" onClick={() => toolState.setTool(new Line(canvasState.canvas))}/>
                <input 
                    onChange={(e) => toolState.setColor(e.target.value)}
                    type="color" style={{marginLeft: '10px'}}
                />
            </div>
            <div className="toolbar__actions">
                <button className="toolbar__btn undo" onClick={() => canvasState.undo()}/>
                <button className="toolbar__btn redo" onClick={() => canvasState.redo()}/>
                <button className="toolbar__btn save" />
            </div>
        </div>
    );
}

export default ToolBar;