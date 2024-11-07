import WelcomeComponent from "./components/WelcomeComponent";
import CounterComponent from "./components/CounterComponent";
import './App.css';

function App() {
    return (
        <div className="App">
            <WelcomeComponent name="Kocaeli Üniversitesi"/>
            <CounterComponent/>
        </div>
    );
}

export default App;
