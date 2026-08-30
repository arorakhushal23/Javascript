import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import New from "./New";
import Display from "./Display";
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("aman");
  const [theme, setTheme] = useState("light");
  const [fruit, setFruit] = useState(["apple", "banana", "cherry"]);
  function handleClick() {
    // setCount(count + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }
  function handleName() {
    setName(name == "aman" ? "rahul" : "aman");
  }
  function handleTheme() {
    setTheme(theme == "light" ? "dark" : "light");
  }
  return (
    <>
      <div
        className={theme == "light" ? "light" : "dark"}
        style={{ border: "2px solid red" }}
      >
        <button onClick={handleTheme}>
          {theme == "light" ? "light" : "dark"}
        </button>
        <h1>Count: {count}</h1>
        <button onClick={handleClick}>ADD</button>
        <Display count={count} />
        <h1>
          Name: <span className={name == "aman" ? "red" : "green"}>{name}</span>
        </h1>
        <button onClick={handleName}>Change name</button>

        <ul>
          {fruit.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
