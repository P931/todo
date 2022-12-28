import React from "react";
import { useState } from "react";

const Usesta = () => {
  const [count, setcount] = useState(1);
  const [num1, setnum1] = useState(1);

  const incre = () => {
    setcount(count + Number(num1));
  };

  const decre = () => {
    setcount(count - num1);
  };

  const reset = () => {
    setcount(0);
  };

  return (
    <>
      <div className="main">
        <h1 className="count"> {count}</h1>
        <div className="btn">
          <div className="de">
            <button className="dec" onClick={decre}>
              -
            </button>
          </div>

          <div className="in">
            <button className="inc" onClick={incre}>
              +
            </button>
          </div>

          <div className="reset">
            <button className="res" onClick={reset}>
              =
            </button>
          </div>
        </div>

        <div className="userint">
          <input
            type="number"
            placeholder="Enter your no"
            className="int"
            onChange={(e) => {
              setnum1(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Usesta;
