function App() {
  let color = "Blue";

  const changeColor = () => {
    color = "Black";
    console.log(color);
  };
  return (
    <>
      <h1>My fav Color is {color}</h1>
      <button onClick={changeColor}>change</button>
    </>
  );
}

export default App;
