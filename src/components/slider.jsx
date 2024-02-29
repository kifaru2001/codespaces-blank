import { useEffect, useState } from "react";
import "./slider.scss"
import "../components/button.scss"
import Cards from "./cards";
import Chart from "./chart";

export default function () {
  const [input, setInput] = useState("1")
  


    return(
        <>
 <div>
 
        <span id="rangeValue">{input} NFTs</span>
        <input class="range" type="range"    value={input} 
           onChange={(e) => setInput(e.target.value)} min="1" max="100"/>
    </div>
   <div className="box">MINT</div>
   <div style={{height: "200px"}}></div>
        </>
    )
}
