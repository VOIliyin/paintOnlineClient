import './styles/app.scss';
import ToolBar from './components/ToolBar';
import SettingBar from './components/SettingBar';
import Canvas from './components/Canvas';

function App() {
    return (
        <div className="app">
            <ToolBar />
            <SettingBar />
            <Canvas />
        </div>
    );
}

export default App;
