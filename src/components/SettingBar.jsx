import React from 'react';
import toolState from '../store/toolState';
import '../styles/settingbar.scss'

function SettingBar() {
    return (
        <div className="settingbar">
            <label htmlFor="lineWidth">Толщина</label>
            <input 
                onChange={(e) => toolState.setWidth(e.target.value)}
                style={{margin: '0 10px'}} 
                id="lineWidth" 
                type="number" 
                defaultValue={1} 
                min={1} 
                max={50}
            />

        </div>
    );
}

export default SettingBar;