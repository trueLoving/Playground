import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const hello = () => {
    alert("hello world")
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <button type="button" onClick={hello}>
            hello world
          </button>
        </p>
      </header>
    </div>
  );
}

export default App;
