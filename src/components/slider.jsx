import { useEffect, useState } from "react";
import "./slider.scss"
import "../components/button.scss"
import Cards from "./cards";
import Chart from "./chart";

export default function Slider() {
  const [input, setInput] = useState("1")
  


    return(
        <>
 <div style={{justifyContent: "center", display: "flex", flexDirection: "column"}}>
 <p style={{margin: "1%"}}>MINTED: --/--</p>
        <span id="rangeValue">{input} 🐋</span>
        <span style={{color: "gray"}} >{(input * 0.125)} CORE</span>
        <input class="range" type="range"    value={input} 
           onChange={(e) => setInput(e.target.value)} min="1" max="100"/>
    </div>
   <div className="box">MINT</div>
   <div style={{height: "200px"}}></div>
        </>
    )
}
