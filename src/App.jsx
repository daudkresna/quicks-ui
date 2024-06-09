import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { MyButton } from "./components/Button";
import { BottomButton } from "./components/BottomButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="h-screen bg-[#262626]">
        <BottomButton />
      </div>
    </>
  );
}

export default App;
