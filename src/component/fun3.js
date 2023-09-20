import React from 'react';
import "../page/count/count.css";

export default function Three({ ThreeCount, ThreesetCount}) {
    function subtract() {
        ThreesetCount((prev) => prev - 3);
    }
    function plus() {
        ThreesetCount((prev) => prev + 3);}
  return (
    <div>
        <h1> Three component</h1>
        <div class="count-con">
        <button onClick={subtract}>Minus</button>
        <p>{ThreeCount}</p>
        <button onClick={plus}>Add</button>

        </div>
        
        

       
    </div>
  );
}

