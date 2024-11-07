import Welcome from "./components/Welcome";
import Component from "./components/Component";
import './App.css';

function App() {
    return (
        <div className="App">
            <Welcome name="Kocaeli Üniversitesi"/>
            <Component/>
        </div>
    );
}

export default App;
