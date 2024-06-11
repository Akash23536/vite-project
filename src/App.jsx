import { useState } from "react";

function App() {
  const [COUNT, SETCOUNT] = useState(0);

  const changeColor = () => {
    SETCOUNT(COUNT + 1);
  };
  return (
    <>
      <h1>COUNT: {COUNT}</h1>

      <button onClick={changeColor}>COUNTER</button>
    </>
  );
}

export default App;
