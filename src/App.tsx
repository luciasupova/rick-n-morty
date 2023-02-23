import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { NavBar } from "./components/library/visual/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar title1={"Characters"} title2={"Locations"} title3={"Episodes"}/>
    </>
  );
}

export default App;
