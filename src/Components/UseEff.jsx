import React, { useEffect, useState } from "react";

const UseEff = () => {
  const [count, Setcount] = useState(0);
  const [trigger, Settrigger] = useState(10);

  setTimeout(() => {
    Settrigger(trigger + 1);
    console.log(trigger + 1);
  }, 2000);

  useEffect(() => {
    const timer = setTimeout(() => {
      Setcount(count + 1);
      console.log(count + 1);
    }, 2000);

    return () => clearTimeout(timer); //prevent memory leak
  }); //dependency array

  return (
    <>
      <h1>The Counter : {count} </h1> <h1>The trigger : {trigger} </h1>
    </>
  );
};

export default UseEff;
