import { useState } from "react";

function App() {
  const [fact, setFact] = useState({
    color: "Blue",
    number: 74,
    fruit: "Mango",
  });

  const changeColor = () => {
    setFact({
      number: "0001",
    });
  };
  return (
    <>
      <h1>
        My fav Color :{fact.color} and my Fav No : {fact.number} and Fruit :{fact.fruit}
      </h1>
      <button onClick={changeColor}>change</button>
    </>
  );
}

export default App;
