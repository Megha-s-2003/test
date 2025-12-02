import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);
  const [color5, setcolor5] = useState("white");
  function handleColor5() {
    setcolor5("green");
  }
  const [color4, setColor4] = useState("white");
  function handleColor4() {
    setColor4("violet");
  }
  const [color3, setColor3] = useState("white");
  function handleColor3() {
    setColor3("Grey");
  }
  const [color2, setColor2] = useState("white");
  function handleColor2() {
    setColor2("Pink");
  }

  const [color1, setColor1] = useState("white");
  function handleColor1() {
    setColor1("Blue");
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button
          onClick={handleColor5}
          style={{ backgroundColor: color5, color: "yellow" }}
        >
          Green
        </button>
        <button
          onClick={handleColor4}
          style={{ backgroundColor: color4, color: "yellow" }}
        >
          Violet
        </button>
        <button
          onClick={handleColor3}
          style={{ background: color3, color: "yellow" }}
        >
          Grey
        </button>
        <button
          onClick={handleColor2}
          style={{ background: color2, color: "yellow" }}
        >
          Pink
        </button>
         <button
            onClick={handleColor1}
            style={{ backgroundColor: color1, color: "yellow" }}
          >
            Blue
          </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App
