import "./App.css";
import PetInfo from "./components/PetInfo";
function App() {
    return (
        <div className="App">
            <PetInfo animal="dog" age="15" hasPet />
            <PetInfo animal="cat" age={22} hasPet={false} />
        </div>
    );
}

export default App;
