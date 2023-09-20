import React from 'react';
import "../page/count/count.css";

export default function Four({ FourCount, FoursetCount}) {
    function subtract() {
        FoursetCount((prev) => prev - 4);
    }
    function plus() {
        FoursetCount((prev) => prev + 4);}
  return (
    <div>
        <h1> Four component</h1>
        <div class="count-con">
        <button onClick={subtract}>Minus</button>
        <p>{FourCount}</p>
        <button onClick={plus}>Add</button>

        </div>
        
        

       
    </div>
  );
}

