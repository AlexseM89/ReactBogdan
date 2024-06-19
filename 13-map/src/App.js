import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";
const texts = [
    "Click me",
    "Click me please",
    "Hit me",
    "Press me",
    "Нажми",
    "Жми",
];
function App() {
    console.log("App rendered");
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count + 1);
        console.log(count);
    };
    return (
        <div className="App">
            <Counter count={count} />
            {texts.map((text, index) => {
                return (
                    <Button onClick={incrementCount} text={text} key={index} />
                );
            })}
        </div>
    );
}

export default App;
