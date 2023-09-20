import React from 'react';
import "../page/count/count.css";

export default function One({ Onecount, OnesetCount}) {
    function subtract() {
        OnesetCount((prev) => prev - 1);
    }
    function plus() {
        OnesetCount((prev) => prev + 1);}
  return (
    <div>
        <h1> one component</h1>
        <div class="count-con">
        <button onClick={subtract}>Minus</button>
        <p>{Onecount}</p>
        <button onClick={plus}>Add</button>

        </div>
        
        

       
    </div>
  );
}
