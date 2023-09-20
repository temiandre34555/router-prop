import React from 'react';
import "../page/count/count.css";

export default function Two({ TwoCount, TwosetCount}) {
    function subtract() {
        TwosetCount((prev) => prev - 2);
    }
    function plus() {
        TwosetCount((prev) => prev + 2);}
  return (
    <div>
        <h1> Two component</h1>
        <div class="count-con">
        <button onClick={subtract}>Minus</button>
        <p>{TwoCount}</p>
        <button onClick={plus}>Add</button>

        </div>
        
        

       
    </div>
  );
}

