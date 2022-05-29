import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../styles/canvas.scss'
import { Brash } from '../tools/Brash';

const Canvas = observer(() => {
    const refCanvas = useRef();

    useEffect(() => {
        canvasState.setCanvas(refCanvas.current);
        toolState.setTool(new Brash(canvasState.canvas))
    }, [])

    function mouseDownHandler() {
        canvasState.pushToUndo(refCanvas.current.toDataURL())
    }

    return (
        <div className="canvas">
            <canvas
                onMouseDown={mouseDownHandler}
                ref={refCanvas} 
                width={800} 
                height={600}
            />
        </div>
    );
})

export default Canvas;