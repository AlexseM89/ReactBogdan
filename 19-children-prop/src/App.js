import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
    return (
        <div className="App">
            <Wrapper color="lightblue">
                <h2>Text inside of the wrapper</h2>
                <button>Clik me!</button>
            </Wrapper>
            <Wrapper color="lightgreen">
                <h2>Another text</h2>
                <p>Sime description</p>
                <input type="text" placeholder="Enter value" />
            </Wrapper>
        </div>
    );
}

export default App;
