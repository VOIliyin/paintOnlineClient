import React from 'react';
import '../styles/toolbar.scss'

function ToolBar() {
    return (
        <div className="toolbar">
            <div className="toolbar__paint">
                <button className="toolbar__btn brush" />
                <button className="toolbar__btn rect" />
                <button className="toolbar__btn circle" />
                <button className="toolbar__btn eraser" />
                <button className="toolbar__btn line" />
                <input type="color" style={{marginLeft: '10px'}}/>
            </div>
            <div className="toolbar__actions">
                <button className="toolbar__btn undo" />
                <button className="toolbar__btn redo" />
                <button className="toolbar__btn save" />
            </div>
        </div>
    );
}

export default ToolBar;