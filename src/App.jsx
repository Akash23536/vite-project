import { useState } from "react";

function App() {
  const [color, setColor] = useState("Red");

  const changeColor = () => {
    setColor("Black");
  };
  return (
    <>
      <h1>My fav Color is {color}</h1>
      <button onClick={changeColor}>change</button>
    </>
  );
}

export default App;
