import React, { useState } from "react";
import "./count.css";
import One from "../../component/fun1";
import Two from "../../component/fun2";
import Three from "../../component/fun3";
import Four from "../../component/fun4";

function Count() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount((prev) => prev + 5);
  };
  return (
    <div>
      <h1>Count Page</h1>
      <div class="count-con">
        <button onClick={() => setCount((prev) => prev - 5)}>Minus</button>
        <p>{count}</p>
        <button onClick={add}>Add</button>
      </div>
      <One Onecount={count} OnesetCount={setCount} />
      <Two TwoCount={count} TwosetCount={setCount} />
      <Three ThreeCount={count} ThreesetCount={setCount} />
      <Four FourCount={count} FoursetCount={setCount} />
    </div>
  );
}

export default Count;