import { useState } from "react";

function App() {
  const [COUNT, SETCOUNT] = useState(0);

  const changeColor = () => {
    // SETCOUNT(COUNT + 1); //1
    // SETCOUNT(COUNT + 1); //1
    // SETCOUNT(COUNT + 1); //1
    // SETCOUNT(COUNT + 1); //1

    SETCOUNT((e) => e + 1); //1
    SETCOUNT((e) => e + 1); //2
    SETCOUNT((e) => e + 1); //3
    SETCOUNT((e) => e + 1); //4
  };
  return (
    <>
      <h1>COUNT: {COUNT}</h1>
      <button onClick={changeColor}>COUNTER</button>
    </>
  );
}

export default App;
